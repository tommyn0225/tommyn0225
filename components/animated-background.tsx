"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseX = e.touches[0].clientX - rect.left
        mouseY = e.touches[0].clientY - rect.top
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })

    const isMobile = window.innerWidth < 768
    const shapeCount = isMobile ? 12 : 25

    interface Shape {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      vx: number
      vy: number
      type: "square" | "triangle" | "hexagon" | "line"
      opacity: number
      baseSize: number
      baseOpacity: number
    }

    const shapes: Shape[] = []
    for (let i = 0; i < shapeCount; i++) {
      const baseSize = Math.random() * 40 + 20
      const baseOpacity = Math.random() * 0.15 + 0.05
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: baseSize,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        type: ["square", "triangle", "hexagon", "line"][Math.floor(Math.random() * 4)] as Shape["type"],
        opacity: baseOpacity,
        baseSize,
        baseOpacity,
      })
    }

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
    }

    const particles: Particle[] = []
    let lastMouseX = mouseX
    let lastMouseY = mouseY

    let scanlineY = 0

    let animationFrameId: number

    const drawShape = (shape: Shape, glitchOffset = 0) => {
      ctx.save()
      ctx.translate(shape.x + glitchOffset, shape.y)
      ctx.rotate(shape.rotation)
      ctx.strokeStyle = `rgba(0, 0, 0, ${shape.opacity})`
      ctx.lineWidth = 2

      switch (shape.type) {
        case "square":
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          break
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.lineTo(-shape.size / 2, shape.size / 2)
          ctx.closePath()
          ctx.stroke()
          break
        case "hexagon":
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i
            const x = (shape.size / 2) * Math.cos(angle)
            const y = (shape.size / 2) * Math.sin(angle)
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.stroke()
          break
        case "line":
          ctx.beginPath()
          ctx.moveTo(-shape.size / 2, 0)
          ctx.lineTo(shape.size / 2, 0)
          ctx.stroke()
          break
      }

      ctx.restore()
    }

    const animate = () => {
      ctx.fillStyle = "#F5F5DC"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001

      const mouseMoved = Math.abs(mouseX - lastMouseX) > 2 || Math.abs(mouseY - lastMouseY) > 2
      if (mouseMoved && Math.random() < (isMobile ? 0.15 : 0.3)) {
        particles.push({
          x: mouseX,
          y: mouseY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: 1,
          size: Math.random() * 8 + 4,
        })
      }
      lastMouseX = mouseX
      lastMouseY = mouseY

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.02
        p.vx *= 0.98
        p.vy *= 0.98

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        const alpha = p.life / p.maxLife
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.3})`
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
      }

      shapes.forEach((shape) => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        if (shape.x < -50) shape.x = canvas.width + 50
        if (shape.x > canvas.width + 50) shape.x = -50
        if (shape.y < -50) shape.y = canvas.height + 50
        if (shape.y > canvas.height + 50) shape.y = -50

        const dx = shape.x - mouseX
        const dy = shape.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const influenceRadius = 250

        if (distance < influenceRadius) {
          const force = (influenceRadius - distance) / influenceRadius

          shape.x += (dx / distance) * force * 3
          shape.y += (dy / distance) * force * 3

          shape.size = shape.baseSize * (1 + force * 0.8)

          shape.opacity = Math.min(0.6, shape.baseOpacity + force * 0.4)

          shape.rotationSpeed = (Math.random() - 0.5) * 0.05 * (1 + force)
        } else {
          shape.size = shape.size * 0.95 + shape.baseSize * 0.05
          shape.opacity = shape.opacity * 0.95 + shape.baseOpacity * 0.05
        }

        const glitchOffset = Math.random() < 0.02 ? (Math.random() - 0.5) * 10 : 0

        drawShape(shape, glitchOffset)
      })

      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, 250, 0, Math.PI * 2)
      ctx.stroke()

      if (!isMobile) {
        ctx.strokeStyle = "rgba(0, 0, 0, 0.03)"
        ctx.lineWidth = 1
        const gridSize = 50

        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath()
          for (let y = 0; y <= canvas.height; y += 5) {
            const dx = x - mouseX
            const dy = y - mouseY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const distortion = distance < 200 ? ((200 - distance) / 200) * 20 : 0
            const offsetX = x + (dx / distance) * distortion

            if (y === 0) ctx.moveTo(offsetX, y)
            else ctx.lineTo(offsetX, y)
          }
          ctx.stroke()
        }

        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath()
          for (let x = 0; x <= canvas.width; x += 5) {
            const dx = x - mouseX
            const dy = y - mouseY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const distortion = distance < 200 ? ((200 - distance) / 200) * 20 : 0
            const offsetY = y + (dy / distance) * distortion

            if (x === 0) ctx.moveTo(x, offsetY)
            else ctx.lineTo(x, offsetY)
          }
          ctx.stroke()
        }
      }

      scanlineY = (scanlineY + 2) % canvas.height
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, scanlineY, canvas.width, 2)

      if (Math.random() < 0.01) {
        const glitchY = Math.random() * canvas.height
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
        ctx.fillRect(0, glitchY, canvas.width, 1)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

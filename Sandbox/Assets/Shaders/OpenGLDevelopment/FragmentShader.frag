#version 430

layout (location = 0) in vec3 inColor;
layout (location = 1) in vec2 inUV;

layout (location = 0) out vec4 outFragColor;

layout (binding = 2) uniform sampler2D rickTex;
layout (binding = 3) uniform sampler2D polandTex;
layout (binding = 4) uniform sampler2D rickColorBuffer;
// layout (binding = 4, rgba8) uniform image2D rickColorBuffer;

void main()
{
	// vec2 screenSize = imageSize(rickColorBuffer);

	// vec4 texColor = texture(rickTex, inUV).xyzw;
    // imageStore(rickColorBuffer, ivec2(screenSize * inUV), texColor);

	// vec4 bufferColor = imageLoad(rickColorBuffer, ivec2(screenSize * inUV));
	vec4 bufferColor = texture(rickColorBuffer, inUV);

	vec4 color = vec4(bufferColor.xyz*inColor, bufferColor.w);
	outFragColor = vec4(color);
}
#version 450

layout(push_constant) uniform constants {
    
    mat4 model;
} objectData;

layout(binding = 0) uniform UniformBufferObject {

    mat4 view;
    mat4 proj;
} ubo;

layout(location = 0) in vec3 position;
layout(location = 1) in vec3 color;
layout(location = 2) in vec2 texCoord; 

layout(location = 0) out vec3 fragColor;
layout(location = 1) out vec2 fragTexCoord;

void main() {

    gl_Position = ubo.proj * ubo.view * objectData.model * vec4(position, 1.0);
    fragColor = color;
    fragTexCoord = texCoord;
}
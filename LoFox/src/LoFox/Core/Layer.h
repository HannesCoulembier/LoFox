#pragma once

namespace LoFox {

	class Layer {

	public:
		virtual ~Layer() = default;

		virtual void OnAttach() {}
		virtual void OnDetach() {}

		virtual void OnUpdate(float ts) {}
		virtual void OnEvent(Event& event) {}
	};
}
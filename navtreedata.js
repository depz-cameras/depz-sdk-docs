/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "iStereoLab SDK", "index.html", [
    [ "iStereoLab / DEPZ SDK — API Documentation", "index.html", [
      [ "Documentation map", "index.html#autotoc_md1", null ],
      [ "Architecture — the C ABI is the facade", "index.html#autotoc_md2", null ],
      [ "Flat C ABI — every facade function", "index.html#autotoc_md3", [
        [ "Version & errors", "index.html#autotoc_md4", null ],
        [ "Frame sources", "index.html#autotoc_md5", null ],
        [ "Calibration", "index.html#autotoc_md6", null ],
        [ "Inference", "index.html#autotoc_md7", null ],
        [ "Pipeline", "index.html#autotoc_md8", null ],
        [ "Frame accessors", "index.html#autotoc_md9", null ],
        [ "MKV recorder", "index.html#autotoc_md10", null ],
        [ "Discovery & controls", "index.html#autotoc_md11", null ],
        [ "Registries & cache", "index.html#autotoc_md12", null ]
      ] ],
      [ "Core math", "index.html#autotoc_md13", null ],
      [ "Research references", "index.html#autotoc_md14", null ]
    ] ],
    [ "DEPZ SDK — Flat C ABI (depz_c_api.h)", "md_docs_C_API.html", [
      [ "Layering — where the C ABI sits", "md_docs_C_API.html#autotoc_md28", null ],
      [ "</blockquote>", "md_docs_C_API.html#autotoc_md29", null ],
      [ "End-to-end data flow (what a consumer actually wires up)", "md_docs_C_API.html#autotoc_md30", null ],
      [ "Handle lifecycle", "md_docs_C_API.html#autotoc_md32", null ],
      [ "Reference — every function by subsystem", "md_docs_C_API.html#autotoc_md34", [
        [ "Types/handles & errors", "md_docs_C_API.html#autotoc_md36", [
          [ "depz_get_version", "md_docs_C_API.html#autotoc_md37", null ],
          [ "depz_last_error", "md_docs_C_API.html#autotoc_md38", null ]
        ] ],
        [ "Frame sources", "md_docs_C_API.html#autotoc_md40", [
          [ "depz_source_create_camera", "md_docs_C_API.html#autotoc_md41", null ],
          [ "depz_source_create_mkv", "md_docs_C_API.html#autotoc_md42", null ],
          [ "depz_source_create_pipeline", "md_docs_C_API.html#autotoc_md43", null ],
          [ "depz_source_open", "md_docs_C_API.html#autotoc_md44", null ],
          [ "depz_source_grab", "md_docs_C_API.html#autotoc_md45", null ],
          [ "depz_source_close", "md_docs_C_API.html#autotoc_md46", null ],
          [ "depz_source_destroy", "md_docs_C_API.html#autotoc_md47", null ]
        ] ],
        [ "Calibration", "md_docs_C_API.html#autotoc_md49", [
          [ "depz_calibration_create_from_json", "md_docs_C_API.html#autotoc_md50", null ],
          [ "depz_calibration_create_from_web", "md_docs_C_API.html#autotoc_md51", null ],
          [ "depz_calibration_get_info", "md_docs_C_API.html#autotoc_md52", null ],
          [ "depz_calibration_get_canvas_layout", "md_docs_C_API.html#autotoc_md53", null ],
          [ "depz_calibration_prepare", "md_docs_C_API.html#autotoc_md54", null ],
          [ "depz_calibration_rectify", "md_docs_C_API.html#autotoc_md55", null ],
          [ "depz_calibration_set_canvas_fit_mode", "md_docs_C_API.html#autotoc_md56", null ],
          [ "depz_calibration_destroy", "md_docs_C_API.html#autotoc_md57", null ]
        ] ],
        [ "Inference", "md_docs_C_API.html#autotoc_md59", [
          [ "depz_inference_create", "md_docs_C_API.html#autotoc_md60", null ],
          [ "depz_inference_create_sized", "md_docs_C_API.html#autotoc_md61", null ],
          [ "depz_inference_compute", "md_docs_C_API.html#autotoc_md62", null ],
          [ "depz_inference_set_intrinsics", "md_docs_C_API.html#autotoc_md63", null ],
          [ "depz_inference_destroy", "md_docs_C_API.html#autotoc_md64", null ]
        ] ],
        [ "Pipeline (lifecycle)", "md_docs_C_API.html#autotoc_md66", [
          [ "depz_pipeline_config_default", "md_docs_C_API.html#autotoc_md67", null ],
          [ "depz_pipeline_create", "md_docs_C_API.html#autotoc_md68", null ],
          [ "depz_pipeline_start", "md_docs_C_API.html#autotoc_md69", null ],
          [ "depz_pipeline_stop", "md_docs_C_API.html#autotoc_md70", null ],
          [ "depz_pipeline_destroy", "md_docs_C_API.html#autotoc_md71", null ],
          [ "depz_pipeline_get", "md_docs_C_API.html#autotoc_md72", null ],
          [ "depz_pipeline_is_running", "md_docs_C_API.html#autotoc_md73", null ],
          [ "depz_pipeline_frame_count", "md_docs_C_API.html#autotoc_md74", null ],
          [ "depz_pipeline_opened_width", "md_docs_C_API.html#autotoc_md75", null ],
          [ "depz_pipeline_opened_height", "md_docs_C_API.html#autotoc_md76", null ],
          [ "depz_pipeline_opened_fps", "md_docs_C_API.html#autotoc_md77", null ]
        ] ],
        [ "Pipeline control", "md_docs_C_API.html#autotoc_md79", [
          [ "depz_pipeline_set_stream_enabled", "md_docs_C_API.html#autotoc_md80", null ],
          [ "depz_pipeline_set_stream_enabled_graph", "md_docs_C_API.html#autotoc_md81", null ],
          [ "depz_pipeline_set_filter_param_f", "md_docs_C_API.html#autotoc_md82", null ],
          [ "depz_pipeline_set_filter_param_i", "md_docs_C_API.html#autotoc_md83", null ],
          [ "depz_pipeline_set_filter_param_b", "md_docs_C_API.html#autotoc_md84", null ],
          [ "depz_pipeline_set_pipeline_setting_s", "md_docs_C_API.html#autotoc_md85", null ],
          [ "depz_pipeline_reset_filters", "md_docs_C_API.html#autotoc_md86", null ]
        ] ],
        [ "Replay", "md_docs_C_API.html#autotoc_md88", [
          [ "depz_pipeline_is_pausable", "md_docs_C_API.html#autotoc_md89", null ],
          [ "depz_pipeline_is_paused", "md_docs_C_API.html#autotoc_md90", null ],
          [ "depz_pipeline_pause", "md_docs_C_API.html#autotoc_md91", null ],
          [ "depz_pipeline_resume", "md_docs_C_API.html#autotoc_md92", null ],
          [ "depz_pipeline_seek", "md_docs_C_API.html#autotoc_md93", null ],
          [ "depz_pipeline_step", "md_docs_C_API.html#autotoc_md94", null ]
        ] ],
        [ "Frame accessors", "md_docs_C_API.html#autotoc_md96", [
          [ "depz_frame_number", "md_docs_C_API.html#autotoc_md97", null ],
          [ "depz_frame_pts_us", "md_docs_C_API.html#autotoc_md98", null ],
          [ "depz_frame_source_index", "md_docs_C_API.html#autotoc_md99", null ],
          [ "depz_frame_is_snapshot", "md_docs_C_API.html#autotoc_md100", null ],
          [ "depz_frame_get_image", "md_docs_C_API.html#autotoc_md101", null ],
          [ "depz_frame_sample_depth", "md_docs_C_API.html#autotoc_md102", null ],
          [ "depz_frame_sample_point3d", "md_docs_C_API.html#autotoc_md103", null ],
          [ "depz_frame_encode_jpeg", "md_docs_C_API.html#autotoc_md104", null ],
          [ "depz_frame_destroy", "md_docs_C_API.html#autotoc_md105", null ]
        ] ],
        [ "Runtime control discovery", "md_docs_C_API.html#autotoc_md107", [
          [ "depz_list_filter_controls", "md_docs_C_API.html#autotoc_md108", null ]
        ] ],
        [ "Runtime metrics", "md_docs_C_API.html#autotoc_md110", [
          [ "depz_pipeline_get_metrics", "md_docs_C_API.html#autotoc_md111", null ]
        ] ],
        [ "Registries/cache/camera-info", "md_docs_C_API.html#autotoc_md113", [
          [ "depz_list_cameras", "md_docs_C_API.html#autotoc_md114", null ],
          [ "depz_list_engines", "md_docs_C_API.html#autotoc_md115", null ],
          [ "depz_recommend_engine", "md_docs_C_API.html#autotoc_md116", null ],
          [ "depz_list_inferences", "md_docs_C_API.html#autotoc_md117", null ],
          [ "depz_get_cache_dir", "md_docs_C_API.html#autotoc_md118", null ],
          [ "depz_set_cache_dir", "md_docs_C_API.html#autotoc_md119", null ],
          [ "depz_clear_cache_dir", "md_docs_C_API.html#autotoc_md120", null ],
          [ "depz_fetch_camera_info_json", "md_docs_C_API.html#autotoc_md121", null ]
        ] ],
        [ "MKV recorder", "md_docs_C_API.html#autotoc_md123", [
          [ "depz_recorder_create", "md_docs_C_API.html#autotoc_md124", null ],
          [ "depz_recorder_write", "md_docs_C_API.html#autotoc_md125", null ],
          [ "depz_recorder_close", "md_docs_C_API.html#autotoc_md126", null ],
          [ "depz_recorder_destroy", "md_docs_C_API.html#autotoc_md127", null ]
        ] ]
      ] ],
      [ "Worked example — AI disparity in C", "md_docs_C_API.html#autotoc_md129", [
        [ "Engine slugs", "md_docs_C_API.html#autotoc_md130", null ]
      ] ],
      [ "Version history", "md_docs_C_API.html#autotoc_md132", null ]
    ] ],
    [ "Java Binding", "md_docs_JAVA.html", [
      [ "Requirements", "md_docs_JAVA.html#autotoc_md134", null ],
      [ "End User Quickstart", "md_docs_JAVA.html#autotoc_md135", null ],
      [ "Build From Source", "md_docs_JAVA.html#autotoc_md136", null ],
      [ "Package Artifact", "md_docs_JAVA.html#autotoc_md137", null ],
      [ "Java Use", "md_docs_JAVA.html#autotoc_md138", null ],
      [ "Standalone Classes", "md_docs_JAVA.html#autotoc_md139", null ],
      [ "Filter Tuning", "md_docs_JAVA.html#autotoc_md140", null ],
      [ "MKV Replay", "md_docs_JAVA.html#autotoc_md141", null ],
      [ "Public Classes", "md_docs_JAVA.html#autotoc_md142", null ],
      [ "Common API Calls", "md_docs_JAVA.html#autotoc_md143", null ],
      [ "Native Loading — resolution order", "md_docs_JAVA.html#autotoc_md144", null ],
      [ "Examples", "md_docs_JAVA.html#autotoc_md145", null ],
      [ "Notes", "md_docs_JAVA.html#autotoc_md146", null ],
      [ "Troubleshooting", "md_docs_JAVA.html#autotoc_md147", null ]
    ] ],
    [ "JavaScript and TypeScript Binding", "md_docs_NODE_JS_TYPESCRIPT.html", [
      [ "Requirements", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md149", null ],
      [ "End User Quickstart", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md150", null ],
      [ "Build From Source", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md151", null ],
      [ "Package Artifact", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md152", null ],
      [ "JavaScript Use", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md153", null ],
      [ "TypeScript Use", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md154", null ],
      [ "Public Classes", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md155", null ],
      [ "Common API Calls", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md156", null ],
      [ "Standalone Classes", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md157", null ],
      [ "Filter Tuning", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md158", null ],
      [ "MKV Replay", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md159", null ],
      [ "Examples", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md160", null ],
      [ "Notes", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md161", null ],
      [ "Troubleshooting", "md_docs_NODE_JS_TYPESCRIPT.html#autotoc_md162", null ]
    ] ],
    [ "Cross-language SDK — the category, the functors, the isomorphism", "md_docs_CROSS_LANGUAGE_CATEGORY.html", [
      [ "</blockquote>", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md164", null ],
      [ "1. The architecture graph", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md165", null ],
      [ "2. The category Depz", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md167", null ],
      [ "3. Each binding is a functor — and which kind", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md169", null ],
      [ "4. The isomorphism <em>between languages</em>", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md171", null ],
      [ "5. How the guards map to the theory", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md173", null ],
      [ "6. The one honest caveat — Python", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md175", null ],
      [ "7. What \"100 %\" requires, concretely", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md177", null ],
      [ "8. The same structure as GoF design patterns", "md_docs_CROSS_LANGUAGE_CATEGORY.html#autotoc_md179", null ]
    ] ],
    [ "Cross-language SDK by example — the same morphisms in every language", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html", [
      [ "</blockquote>", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md181", null ],
      [ "1. The one category, six presentations", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md182", null ],
      [ "2. The same program in every language", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md184", [
        [ "C — the flat C ABI (examples/c/depz_c_api_smoke.c)", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md185", null ],
        [ "C++ — the core classes the bindings wrap (DepthPipeline)", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md186", null ],
        [ "Java — Panama FFM over the C ABI (examples/java/HelloDepth.java)", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md187", null ],
        [ "Python (ctypes) — the <em>same</em> C ABI (bindings/python_cabi/depz_cabi.py)", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md188", null ],
        [ "Python (nanobind) — over the C++ classes (depz_camera_sdk)", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md189", null ],
        [ "Node / TypeScript — N-API over the C ABI (examples/node/typed_api_demo.ts)", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md190", null ]
      ] ],
      [ "3. The functor, made into a table", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md192", null ],
      [ "4. Homogeneity, categorically", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md194", null ],
      [ "5. Guards that keep the table honest", "md_docs_CROSS_LANGUAGE_BY_EXAMPLE.html#autotoc_md196", null ]
    ] ],
    [ "SDK cookbook — the same recipes in every language", "md_docs_EXAMPLES_BY_LANGUAGE.html", [
      [ "</blockquote>", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md198", null ],
      [ "1. Version & discovery", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md199", null ],
      [ "2. Build → start → one frame → read disparity → stop", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md201", null ],
      [ "3. Sample metric depth & a 3D point", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md203", null ],
      [ "4. Tune a filter control (live, no restart)", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md205", null ],
      [ "</blockquote>", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md206", null ],
      [ "5. Runtime metrics", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md207", null ],
      [ "6. MKV replay — seek & step", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md209", null ],
      [ "Resource cleanup — the one thing that is the language's, not ours", "md_docs_EXAMPLES_BY_LANGUAGE.html#autotoc_md211", null ]
    ] ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"",
"classcom_1_1istereolab_1_1depz_1_1DepzFrame.html#a3c4a33859a6ff49a2de37bd8d271d45e",
"classdepz__camera__sdk_1_1engines_1_1tensorrt__engine_1_1TensorRTEngine.html#a2d3550896cd5379d660375eb42fc983a",
"classdepz__camera__sdk_1_1sources_1_1base_1_1FrameSource.html#ae9bf3d68506c1b22a98cb08df68370cb",
"classstereocam_1_1StereoPipeline.html#ac6ce67b96003388940cebb9a2f22efb2",
"classstereocam_1_1inference_1_1DepthInferenceBase.html#aec5ed44f73d04e8e18bf67b10cf21c71",
"depz__cabi_8py.html#ab0d08d56f54ebd12751ee6cb1c91c1e1",
"group__cabi__controls.html#ga0e835369ab886ebd8850b631b11dbb80",
"image__processing__utils_8hpp.html#a2c248ce80a8e741821e1654f66fe7267afac5cd58d531ba2d52b668422b4352bc",
"mkv__frame__source_8h.html",
"namespacestereocam.html",
"structdepz__metrics.html#a43d0104a9f7c6c4cea07a4feacf61045",
"structstereocam_1_1pipeline_1_1CanvasSetup.html#aee7edca3b3f1362d885e1ffa86942dd3"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
# `aiSearchNamespace` Submodule <a name="`aiSearchNamespace` Submodule" id="@cdktn/provider-cloudflare.aiSearchNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchNamespace <a name="AiSearchNamespace" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace cloudflare_ai_search_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  description: str = None,
  public_endpoint_params: AiSearchNamespacePublicEndpointParams = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#account_id AiSearchNamespace#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#name AiSearchNamespace#name}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional description for the namespace. Max 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#public_endpoint_params AiSearchNamespace#public_endpoint_params}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#account_id AiSearchNamespace#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#name AiSearchNamespace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.description"></a>

- *Type:* str

Optional description for the namespace. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}

---

##### `public_endpoint_params`<sup>Optional</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.Initializer.parameter.publicEndpointParams"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#public_endpoint_params AiSearchNamespace#public_endpoint_params}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams">put_public_endpoint_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetPublicEndpointParams">reset_public_endpoint_params</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_public_endpoint_params` <a name="put_public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams"></a>

```python
def put_public_endpoint_params(
  authorized_hosts: typing.List[str] = None,
  chat_completions_endpoint: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint = None,
  custom_domains: typing.List[str] = None,
  default_domain_enabled: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  instances_allowed: typing.List[str] = None,
  mcp: AiSearchNamespacePublicEndpointParamsMcp = None,
  rate_limit: AiSearchNamespacePublicEndpointParamsRateLimit = None,
  search_endpoint: AiSearchNamespacePublicEndpointParamsSearchEndpoint = None
) -> None
```

###### `authorized_hosts`<sup>Optional</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.authorizedHosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#authorized_hosts AiSearchNamespace#authorized_hosts}.

---

###### `chat_completions_endpoint`<sup>Optional</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.chatCompletionsEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#chat_completions_endpoint AiSearchNamespace#chat_completions_endpoint}.

---

###### `custom_domains`<sup>Optional</sup> <a name="custom_domains" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.customDomains"></a>

- *Type:* typing.List[str]

Custom domain hostnames that alias this public endpoint.

GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#custom_domains AiSearchNamespace#custom_domains}

---

###### `default_domain_enabled`<sup>Optional</sup> <a name="default_domain_enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.defaultDomainEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#default_domain_enabled AiSearchNamespace#default_domain_enabled}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#enabled AiSearchNamespace#enabled}.

---

###### `instances_allowed`<sup>Optional</sup> <a name="instances_allowed" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.instancesAllowed"></a>

- *Type:* typing.List[str]

Instance IDs exposed through the namespace public endpoint.

Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#instances_allowed AiSearchNamespace#instances_allowed}

---

###### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.mcp"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#mcp AiSearchNamespace#mcp}.

---

###### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.rateLimit"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#rate_limit AiSearchNamespace#rate_limit}.

---

###### `search_endpoint`<sup>Optional</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.putPublicEndpointParams.parameter.searchEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#search_endpoint AiSearchNamespace#search_endpoint}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_public_endpoint_params` <a name="reset_public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.resetPublicEndpointParams"></a>

```python
def reset_public_endpoint_params() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AiSearchNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isConstruct"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespace.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AiSearchNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiSearchNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiSearchNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointId">public_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference">AiSearchNamespacePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParamsInput">public_endpoint_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `public_endpoint_id`<sup>Required</sup> <a name="public_endpoint_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointId"></a>

```python
public_endpoint_id: str
```

- *Type:* str

---

##### `public_endpoint_params`<sup>Required</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParams"></a>

```python
public_endpoint_params: AiSearchNamespacePublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference">AiSearchNamespacePublicEndpointParamsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_endpoint_params_input`<sup>Optional</sup> <a name="public_endpoint_params_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.publicEndpointParamsInput"></a>

```python
public_endpoint_params_input: IResolvable | AiSearchNamespacePublicEndpointParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchNamespaceConfig <a name="AiSearchNamespaceConfig" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  description: str = None,
  public_endpoint_params: AiSearchNamespacePublicEndpointParams = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#account_id AiSearchNamespace#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#name AiSearchNamespace#name}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.description">description</a></code> | <code>str</code> | Optional description for the namespace. Max 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#public_endpoint_params AiSearchNamespace#public_endpoint_params}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#account_id AiSearchNamespace#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#name AiSearchNamespace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the namespace. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}

---

##### `public_endpoint_params`<sup>Optional</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespaceConfig.property.publicEndpointParams"></a>

```python
public_endpoint_params: AiSearchNamespacePublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#public_endpoint_params AiSearchNamespace#public_endpoint_params}.

---

### AiSearchNamespacePublicEndpointParams <a name="AiSearchNamespacePublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParams(
  authorized_hosts: typing.List[str] = None,
  chat_completions_endpoint: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint = None,
  custom_domains: typing.List[str] = None,
  default_domain_enabled: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  instances_allowed: typing.List[str] = None,
  mcp: AiSearchNamespacePublicEndpointParamsMcp = None,
  rate_limit: AiSearchNamespacePublicEndpointParamsRateLimit = None,
  search_endpoint: AiSearchNamespacePublicEndpointParamsSearchEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.authorizedHosts">authorized_hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#authorized_hosts AiSearchNamespace#authorized_hosts}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.chatCompletionsEndpoint">chat_completions_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#chat_completions_endpoint AiSearchNamespace#chat_completions_endpoint}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.customDomains">custom_domains</a></code> | <code>typing.List[str]</code> | Custom domain hostnames that alias this public endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.defaultDomainEnabled">default_domain_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#enabled AiSearchNamespace#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.instancesAllowed">instances_allowed</a></code> | <code>typing.List[str]</code> | Instance IDs exposed through the namespace public endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#mcp AiSearchNamespace#mcp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.rateLimit">rate_limit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#rate_limit AiSearchNamespace#rate_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.searchEndpoint">search_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#search_endpoint AiSearchNamespace#search_endpoint}. |

---

##### `authorized_hosts`<sup>Optional</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.authorizedHosts"></a>

```python
authorized_hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#authorized_hosts AiSearchNamespace#authorized_hosts}.

---

##### `chat_completions_endpoint`<sup>Optional</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.chatCompletionsEndpoint"></a>

```python
chat_completions_endpoint: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#chat_completions_endpoint AiSearchNamespace#chat_completions_endpoint}.

---

##### `custom_domains`<sup>Optional</sup> <a name="custom_domains" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.customDomains"></a>

```python
custom_domains: typing.List[str]
```

- *Type:* typing.List[str]

Custom domain hostnames that alias this public endpoint.

GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#custom_domains AiSearchNamespace#custom_domains}

---

##### `default_domain_enabled`<sup>Optional</sup> <a name="default_domain_enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.defaultDomainEnabled"></a>

```python
default_domain_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#default_domain_enabled AiSearchNamespace#default_domain_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#enabled AiSearchNamespace#enabled}.

---

##### `instances_allowed`<sup>Optional</sup> <a name="instances_allowed" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.instancesAllowed"></a>

```python
instances_allowed: typing.List[str]
```

- *Type:* typing.List[str]

Instance IDs exposed through the namespace public endpoint.

Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#instances_allowed AiSearchNamespace#instances_allowed}

---

##### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.mcp"></a>

```python
mcp: AiSearchNamespacePublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#mcp AiSearchNamespace#mcp}.

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.rateLimit"></a>

```python
rate_limit: AiSearchNamespacePublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#rate_limit AiSearchNamespace#rate_limit}.

---

##### `search_endpoint`<sup>Optional</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams.property.searchEndpoint"></a>

```python
search_endpoint: AiSearchNamespacePublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#search_endpoint AiSearchNamespace#search_endpoint}.

---

### AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint <a name="AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint(
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable chat completions endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

### AiSearchNamespacePublicEndpointParamsMcp <a name="AiSearchNamespacePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp(
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable MCP endpoint for this public endpoint. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

### AiSearchNamespacePublicEndpointParamsRateLimit <a name="AiSearchNamespacePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit(
  period_ms: typing.Union[int, float] = None,
  requests: typing.Union[int, float] = None,
  technique: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#period_ms AiSearchNamespace#period_ms}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#requests AiSearchNamespace#requests}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.technique">technique</a></code> | <code>str</code> | Available values: "fixed", "sliding". |

---

##### `period_ms`<sup>Optional</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#period_ms AiSearchNamespace#period_ms}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#requests AiSearchNamespace#requests}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit.property.technique"></a>

```python
technique: str
```

- *Type:* str

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#technique AiSearchNamespace#technique}

---

### AiSearchNamespacePublicEndpointParamsSearchEndpoint <a name="AiSearchNamespacePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint(
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable search endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a>

---


### AiSearchNamespacePublicEndpointParamsMcpOutputReference <a name="AiSearchNamespacePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchNamespacePublicEndpointParamsMcp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a>

---


### AiSearchNamespacePublicEndpointParamsOutputReference <a name="AiSearchNamespacePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putChatCompletionsEndpoint">put_chat_completions_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putMcp">put_mcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit">put_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putSearchEndpoint">put_search_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetAuthorizedHosts">reset_authorized_hosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint">reset_chat_completions_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetCustomDomains">reset_custom_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetDefaultDomainEnabled">reset_default_domain_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetInstancesAllowed">reset_instances_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetMcp">reset_mcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetRateLimit">reset_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetSearchEndpoint">reset_search_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chat_completions_endpoint` <a name="put_chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putChatCompletionsEndpoint"></a>

```python
def put_chat_completions_endpoint(
  disabled: bool | IResolvable = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putChatCompletionsEndpoint.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

##### `put_mcp` <a name="put_mcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putMcp"></a>

```python
def put_mcp(
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putMcp.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}.

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putMcp.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

##### `put_rate_limit` <a name="put_rate_limit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit"></a>

```python
def put_rate_limit(
  period_ms: typing.Union[int, float] = None,
  requests: typing.Union[int, float] = None,
  technique: str = None
) -> None
```

###### `period_ms`<sup>Optional</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit.parameter.periodMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#period_ms AiSearchNamespace#period_ms}.

---

###### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit.parameter.requests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#requests AiSearchNamespace#requests}.

---

###### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putRateLimit.parameter.technique"></a>

- *Type:* str

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#technique AiSearchNamespace#technique}

---

##### `put_search_endpoint` <a name="put_search_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putSearchEndpoint"></a>

```python
def put_search_endpoint(
  disabled: bool | IResolvable = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.putSearchEndpoint.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}

---

##### `reset_authorized_hosts` <a name="reset_authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetAuthorizedHosts"></a>

```python
def reset_authorized_hosts() -> None
```

##### `reset_chat_completions_endpoint` <a name="reset_chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint"></a>

```python
def reset_chat_completions_endpoint() -> None
```

##### `reset_custom_domains` <a name="reset_custom_domains" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetCustomDomains"></a>

```python
def reset_custom_domains() -> None
```

##### `reset_default_domain_enabled` <a name="reset_default_domain_enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetDefaultDomainEnabled"></a>

```python
def reset_default_domain_enabled() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_instances_allowed` <a name="reset_instances_allowed" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetInstancesAllowed"></a>

```python
def reset_instances_allowed() -> None
```

##### `reset_mcp` <a name="reset_mcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetMcp"></a>

```python
def reset_mcp() -> None
```

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```

##### `reset_search_endpoint` <a name="reset_search_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.resetSearchEndpoint"></a>

```python
def reset_search_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">chat_completions_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference">AiSearchNamespacePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimit">rate_limit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference">AiSearchNamespacePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpoint">search_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference">AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHostsInput">authorized_hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput">chat_completions_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomainsInput">custom_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabledInput">default_domain_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowedInput">instances_allowed_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcpInput">mcp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimitInput">rate_limit_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpointInput">search_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHosts">authorized_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomains">custom_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabled">default_domain_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowed">instances_allowed</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat_completions_endpoint`<sup>Required</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```python
chat_completions_endpoint: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcp"></a>

```python
mcp: AiSearchNamespacePublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcpOutputReference">AiSearchNamespacePublicEndpointParamsMcpOutputReference</a>

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimit"></a>

```python
rate_limit: AiSearchNamespacePublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference">AiSearchNamespacePublicEndpointParamsRateLimitOutputReference</a>

---

##### `search_endpoint`<sup>Required</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```python
search_endpoint: AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference">AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `authorized_hosts_input`<sup>Optional</sup> <a name="authorized_hosts_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHostsInput"></a>

```python
authorized_hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `chat_completions_endpoint_input`<sup>Optional</sup> <a name="chat_completions_endpoint_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput"></a>

```python
chat_completions_endpoint_input: IResolvable | AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint">AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `custom_domains_input`<sup>Optional</sup> <a name="custom_domains_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomainsInput"></a>

```python
custom_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_domain_enabled_input`<sup>Optional</sup> <a name="default_domain_enabled_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabledInput"></a>

```python
default_domain_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instances_allowed_input`<sup>Optional</sup> <a name="instances_allowed_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowedInput"></a>

```python
instances_allowed_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mcp_input`<sup>Optional</sup> <a name="mcp_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.mcpInput"></a>

```python
mcp_input: IResolvable | AiSearchNamespacePublicEndpointParamsMcp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsMcp">AiSearchNamespacePublicEndpointParamsMcp</a>

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.rateLimitInput"></a>

```python
rate_limit_input: IResolvable | AiSearchNamespacePublicEndpointParamsRateLimit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a>

---

##### `search_endpoint_input`<sup>Optional</sup> <a name="search_endpoint_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.searchEndpointInput"></a>

```python
search_endpoint_input: IResolvable | AiSearchNamespacePublicEndpointParamsSearchEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a>

---

##### `authorized_hosts`<sup>Required</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```python
authorized_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_domains`<sup>Required</sup> <a name="custom_domains" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.customDomains"></a>

```python
custom_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_domain_enabled`<sup>Required</sup> <a name="default_domain_enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.defaultDomainEnabled"></a>

```python
default_domain_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instances_allowed`<sup>Required</sup> <a name="instances_allowed" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.instancesAllowed"></a>

```python
instances_allowed: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchNamespacePublicEndpointParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParams">AiSearchNamespacePublicEndpointParams</a>

---


### AiSearchNamespacePublicEndpointParamsRateLimitOutputReference <a name="AiSearchNamespacePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetPeriodMs">reset_period_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetTechnique">reset_technique</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period_ms` <a name="reset_period_ms" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetPeriodMs"></a>

```python
def reset_period_ms() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_technique` <a name="reset_technique" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.resetTechnique"></a>

```python
def reset_technique() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMsInput">period_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.techniqueInput">technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_ms_input`<sup>Optional</sup> <a name="period_ms_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMsInput"></a>

```python
period_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `technique_input`<sup>Optional</sup> <a name="technique_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.techniqueInput"></a>

```python
technique_input: str
```

- *Type:* str

---

##### `period_ms`<sup>Required</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchNamespacePublicEndpointParamsRateLimit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsRateLimit">AiSearchNamespacePublicEndpointParamsRateLimit</a>

---


### AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference <a name="AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_namespace

aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchNamespacePublicEndpointParamsSearchEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchNamespace.AiSearchNamespacePublicEndpointParamsSearchEndpoint">AiSearchNamespacePublicEndpointParamsSearchEndpoint</a>

---




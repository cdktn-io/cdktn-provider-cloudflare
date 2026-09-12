# `zeroTrustResourceLibraryApplication` Submodule <a name="`zeroTrustResourceLibraryApplication` Submodule" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustResourceLibraryApplication <a name="ZeroTrustResourceLibraryApplication" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_resource_library_application

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication(
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
  category_id: typing.Union[int, float],
  human_id: str,
  name: str,
  hostnames: typing.List[str] = None,
  ip_subnets: typing.List[str] = None,
  port_protocols: typing.List[str] = None,
  support_domains: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.categoryId">category_id</a></code> | <code>typing.Union[int, float]</code> | Returns the category ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.humanId">human_id</a></code> | <code>str</code> | Returns the human readable ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Returns the application name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Hostnames matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.ipSubnets">ip_subnets</a></code> | <code>typing.List[str]</code> | IP subnets matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.portProtocols">port_protocols</a></code> | <code>typing.List[str]</code> | Port and protocol pairs matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.supportDomains">support_domains</a></code> | <code>typing.List[str]</code> | Support domains matched by the application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}.

---

##### `category_id`<sup>Required</sup> <a name="category_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.categoryId"></a>

- *Type:* typing.Union[int, float]

Returns the category ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}

---

##### `human_id`<sup>Required</sup> <a name="human_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.humanId"></a>

- *Type:* str

Returns the human readable ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.name"></a>

- *Type:* str

Returns the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.hostnames"></a>

- *Type:* typing.List[str]

Hostnames matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}

---

##### `ip_subnets`<sup>Optional</sup> <a name="ip_subnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.ipSubnets"></a>

- *Type:* typing.List[str]

IP subnets matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}

---

##### `port_protocols`<sup>Optional</sup> <a name="port_protocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.portProtocols"></a>

- *Type:* typing.List[str]

Port and protocol pairs matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}

---

##### `support_domains`<sup>Optional</sup> <a name="support_domains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.supportDomains"></a>

- *Type:* typing.List[str]

Support domains matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames">reset_hostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets">reset_ip_subnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols">reset_port_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains">reset_support_domains</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_hostnames` <a name="reset_hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames"></a>

```python
def reset_hostnames() -> None
```

##### `reset_ip_subnets` <a name="reset_ip_subnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets"></a>

```python
def reset_ip_subnets() -> None
```

##### `reset_port_protocols` <a name="reset_port_protocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols"></a>

```python
def reset_port_protocols() -> None
```

##### `reset_support_domains` <a name="reset_support_domains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains"></a>

```python
def reset_support_domains() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_resource_library_application

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_resource_library_application

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_resource_library_application

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_resource_library_application

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustResourceLibraryApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustResourceLibraryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustResourceLibraryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore">application_confidence_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition">application_score_composition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource">application_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription">application_type_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore">gen_ai_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported">supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput">category_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput">hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput">human_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput">ip_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput">port_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput">support_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId">category_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId">human_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets">ip_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols">port_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains">support_domains</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_confidence_score`<sup>Required</sup> <a name="application_confidence_score" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore"></a>

```python
application_confidence_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_score_composition`<sup>Required</sup> <a name="application_score_composition" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition"></a>

```python
application_score_composition: str
```

- *Type:* str

---

##### `application_source`<sup>Required</sup> <a name="application_source" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource"></a>

```python
application_source: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `application_type_description`<sup>Required</sup> <a name="application_type_description" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription"></a>

```python
application_type_description: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `gen_ai_score`<sup>Required</sup> <a name="gen_ai_score" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore"></a>

```python
gen_ai_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supported`<sup>Required</sup> <a name="supported" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported"></a>

```python
supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `category_id_input`<sup>Optional</sup> <a name="category_id_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput"></a>

```python
category_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostnames_input`<sup>Optional</sup> <a name="hostnames_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput"></a>

```python
hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `human_id_input`<sup>Optional</sup> <a name="human_id_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput"></a>

```python
human_id_input: str
```

- *Type:* str

---

##### `ip_subnets_input`<sup>Optional</sup> <a name="ip_subnets_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput"></a>

```python
ip_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_protocols_input`<sup>Optional</sup> <a name="port_protocols_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput"></a>

```python
port_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_domains_input`<sup>Optional</sup> <a name="support_domains_input" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput"></a>

```python
support_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `category_id`<sup>Required</sup> <a name="category_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId"></a>

```python
category_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `human_id`<sup>Required</sup> <a name="human_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId"></a>

```python
human_id: str
```

- *Type:* str

---

##### `ip_subnets`<sup>Required</sup> <a name="ip_subnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets"></a>

```python
ip_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_protocols`<sup>Required</sup> <a name="port_protocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols"></a>

```python
port_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_domains`<sup>Required</sup> <a name="support_domains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains"></a>

```python
support_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustResourceLibraryApplicationConfig <a name="ZeroTrustResourceLibraryApplicationConfig" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_resource_library_application

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  category_id: typing.Union[int, float],
  human_id: str,
  name: str,
  hostnames: typing.List[str] = None,
  ip_subnets: typing.List[str] = None,
  port_protocols: typing.List[str] = None,
  support_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId">category_id</a></code> | <code>typing.Union[int, float]</code> | Returns the category ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId">human_id</a></code> | <code>str</code> | Returns the human readable ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name">name</a></code> | <code>str</code> | Returns the application name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Hostnames matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets">ip_subnets</a></code> | <code>typing.List[str]</code> | IP subnets matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols">port_protocols</a></code> | <code>typing.List[str]</code> | Port and protocol pairs matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains">support_domains</a></code> | <code>typing.List[str]</code> | Support domains matched by the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}.

---

##### `category_id`<sup>Required</sup> <a name="category_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId"></a>

```python
category_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Returns the category ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}

---

##### `human_id`<sup>Required</sup> <a name="human_id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId"></a>

```python
human_id: str
```

- *Type:* str

Returns the human readable ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Returns the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Hostnames matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}

---

##### `ip_subnets`<sup>Optional</sup> <a name="ip_subnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets"></a>

```python
ip_subnets: typing.List[str]
```

- *Type:* typing.List[str]

IP subnets matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}

---

##### `port_protocols`<sup>Optional</sup> <a name="port_protocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols"></a>

```python
port_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Port and protocol pairs matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}

---

##### `support_domains`<sup>Optional</sup> <a name="support_domains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains"></a>

```python
support_domains: typing.List[str]
```

- *Type:* typing.List[str]

Support domains matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}

---




# `dataCloudflareShare` Submodule <a name="`dataCloudflareShare` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareShare <a name="DataCloudflareShare" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share cloudflare_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShare(
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
  filter: DataCloudflareShareFilter = None,
  include_recipient_counts: bool | IResolvable = None,
  include_resources: bool | IResolvable = None,
  share_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#filter DataCloudflareShare#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.includeRecipientCounts">include_recipient_counts</a></code> | <code>bool \| cdktn.IResolvable</code> | Include recipient counts in the response. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.includeResources">include_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Include resources in the response. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.shareId">share_id</a></code> | <code>str</code> | Share identifier tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#account_id DataCloudflareShare#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#filter DataCloudflareShare#filter}.

---

##### `include_recipient_counts`<sup>Optional</sup> <a name="include_recipient_counts" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.includeRecipientCounts"></a>

- *Type:* bool | cdktn.IResolvable

Include recipient counts in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#include_recipient_counts DataCloudflareShare#include_recipient_counts}

---

##### `include_resources`<sup>Optional</sup> <a name="include_resources" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.includeResources"></a>

- *Type:* bool | cdktn.IResolvable

Include resources in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#include_resources DataCloudflareShare#include_resources}

---

##### `share_id`<sup>Optional</sup> <a name="share_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.Initializer.parameter.shareId"></a>

- *Type:* str

Share identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#share_id DataCloudflareShare#share_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetIncludeRecipientCounts">reset_include_recipient_counts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetIncludeResources">reset_include_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetShareId">reset_share_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  kind: str = None,
  order: str = None,
  resource_types: typing.List[str] = None,
  status: str = None,
  tag: typing.List[str] = None,
  target_type: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter.parameter.direction"></a>

- *Type:* str

Direction to sort objects. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#direction DataCloudflareShare#direction}

---

###### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter.parameter.kind"></a>

- *Type:* str

Filter shares by kind. Available values: "sent", "received".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#kind DataCloudflareShare#kind}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter.parameter.order"></a>

- *Type:* str

Order shares by values in the given field. Available values: "name", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#order DataCloudflareShare#order}

---

###### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

Filter share resources by resource_types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#resource_types DataCloudflareShare#resource_types}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter.parameter.status"></a>

- *Type:* str

Filter shares by status. Available values: "active", "deleting", "deleted".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#status DataCloudflareShare#status}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter.parameter.tag"></a>

- *Type:* typing.List[str]

Filter shares by tag.

Each value is either `key=value` (matches shares whose tags contain that key/value pair) or `key` alone (matches shares that have any value for that key). May be repeated; multiple `tag` parameters are ANDed together. Maximum 20 `tag` parameters per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#tag DataCloudflareShare#tag}

---

###### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.putFilter.parameter.targetType"></a>

- *Type:* str

Filter shares by target_type. Available values: "account", "organization".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#target_type DataCloudflareShare#target_type}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_include_recipient_counts` <a name="reset_include_recipient_counts" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetIncludeRecipientCounts"></a>

```python
def reset_include_recipient_counts() -> None
```

##### `reset_include_resources` <a name="reset_include_resources" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetIncludeResources"></a>

```python
def reset_include_resources() -> None
```

##### `reset_share_id` <a name="reset_share_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.resetShareId"></a>

```python
def reset_share_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareShare resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShare.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.associatedRecipientCount">associated_recipient_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.associatingRecipientCount">associating_recipient_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.disassociatedRecipientCount">disassociated_recipient_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.disassociatingRecipientCount">disassociating_recipient_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference">DataCloudflareShareFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList">DataCloudflareShareResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeRecipientCountsInput">include_recipient_counts_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeResourcesInput">include_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.shareIdInput">share_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeRecipientCounts">include_recipient_counts</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeResources">include_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.shareId">share_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `associated_recipient_count`<sup>Required</sup> <a name="associated_recipient_count" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.associatedRecipientCount"></a>

```python
associated_recipient_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `associating_recipient_count`<sup>Required</sup> <a name="associating_recipient_count" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.associatingRecipientCount"></a>

```python
associating_recipient_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `disassociated_recipient_count`<sup>Required</sup> <a name="disassociated_recipient_count" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.disassociatedRecipientCount"></a>

```python
disassociated_recipient_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disassociating_recipient_count`<sup>Required</sup> <a name="disassociating_recipient_count" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.disassociatingRecipientCount"></a>

```python
disassociating_recipient_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.filter"></a>

```python
filter: DataCloudflareShareFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference">DataCloudflareShareFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.resources"></a>

```python
resources: DataCloudflareShareResourcesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList">DataCloudflareShareResourcesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareShareFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a>

---

##### `include_recipient_counts_input`<sup>Optional</sup> <a name="include_recipient_counts_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeRecipientCountsInput"></a>

```python
include_recipient_counts_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_resources_input`<sup>Optional</sup> <a name="include_resources_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeResourcesInput"></a>

```python
include_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `share_id_input`<sup>Optional</sup> <a name="share_id_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.shareIdInput"></a>

```python
share_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `include_recipient_counts`<sup>Required</sup> <a name="include_recipient_counts" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeRecipientCounts"></a>

```python
include_recipient_counts: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_resources`<sup>Required</sup> <a name="include_resources" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.includeResources"></a>

```python
include_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareShareConfig <a name="DataCloudflareShareConfig" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShareConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareShareFilter = None,
  include_recipient_counts: bool | IResolvable = None,
  include_resources: bool | IResolvable = None,
  share_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#filter DataCloudflareShare#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.includeRecipientCounts">include_recipient_counts</a></code> | <code>bool \| cdktn.IResolvable</code> | Include recipient counts in the response. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.includeResources">include_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Include resources in the response. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.shareId">share_id</a></code> | <code>str</code> | Share identifier tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#account_id DataCloudflareShare#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.filter"></a>

```python
filter: DataCloudflareShareFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#filter DataCloudflareShare#filter}.

---

##### `include_recipient_counts`<sup>Optional</sup> <a name="include_recipient_counts" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.includeRecipientCounts"></a>

```python
include_recipient_counts: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Include recipient counts in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#include_recipient_counts DataCloudflareShare#include_recipient_counts}

---

##### `include_resources`<sup>Optional</sup> <a name="include_resources" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.includeResources"></a>

```python
include_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Include resources in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#include_resources DataCloudflareShare#include_resources}

---

##### `share_id`<sup>Optional</sup> <a name="share_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareConfig.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

Share identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#share_id DataCloudflareShare#share_id}

---

### DataCloudflareShareFilter <a name="DataCloudflareShareFilter" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShareFilter(
  direction: str = None,
  kind: str = None,
  order: str = None,
  resource_types: typing.List[str] = None,
  status: str = None,
  tag: typing.List[str] = None,
  target_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.direction">direction</a></code> | <code>str</code> | Direction to sort objects. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.kind">kind</a></code> | <code>str</code> | Filter shares by kind. Available values: "sent", "received". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.order">order</a></code> | <code>str</code> | Order shares by values in the given field. Available values: "name", "created". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Filter share resources by resource_types. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.status">status</a></code> | <code>str</code> | Filter shares by status. Available values: "active", "deleting", "deleted". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.tag">tag</a></code> | <code>typing.List[str]</code> | Filter shares by tag. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.targetType">target_type</a></code> | <code>str</code> | Filter shares by target_type. Available values: "account", "organization". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction to sort objects. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#direction DataCloudflareShare#direction}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.kind"></a>

```python
kind: str
```

- *Type:* str

Filter shares by kind. Available values: "sent", "received".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#kind DataCloudflareShare#kind}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Order shares by values in the given field. Available values: "name", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#order DataCloudflareShare#order}

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Filter share resources by resource_types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#resource_types DataCloudflareShare#resource_types}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.status"></a>

```python
status: str
```

- *Type:* str

Filter shares by status. Available values: "active", "deleting", "deleted".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#status DataCloudflareShare#status}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.tag"></a>

```python
tag: typing.List[str]
```

- *Type:* typing.List[str]

Filter shares by tag.

Each value is either `key=value` (matches shares whose tags contain that key/value pair) or `key` alone (matches shares that have any value for that key). May be repeated; multiple `tag` parameters are ANDed together. Maximum 20 `tag` parameters per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#tag DataCloudflareShare#tag}

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Filter shares by target_type. Available values: "account", "organization".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/share#target_type DataCloudflareShare#target_type}

---

### DataCloudflareShareResources <a name="DataCloudflareShareResources" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResources.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShareResources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareShareFilterOutputReference <a name="DataCloudflareShareFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShareFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetTargetType">reset_target_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.resetTargetType"></a>

```python
def reset_target_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.tagInput">tag_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.tag">tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.tagInput"></a>

```python
tag_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.tag"></a>

```python
tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareShareFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareFilter">DataCloudflareShareFilter</a>

---


### DataCloudflareShareResourcesList <a name="DataCloudflareShareResourcesList" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShareResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareShareResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareShareResourcesOutputReference <a name="DataCloudflareShareResourcesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_share

dataCloudflareShare.DataCloudflareShareResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.meta">meta</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceAccountId">resource_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceVersion">resource_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResources">DataCloudflareShareResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.meta"></a>

```python
meta: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `resource_account_id`<sup>Required</sup> <a name="resource_account_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceAccountId"></a>

```python
resource_account_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.resourceVersion"></a>

```python
resource_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareShareResources
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareShare.DataCloudflareShareResources">DataCloudflareShareResources</a>

---




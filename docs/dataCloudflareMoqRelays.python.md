# `dataCloudflareMoqRelays` Submodule <a name="`dataCloudflareMoqRelays` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMoqRelays <a name="DataCloudflareMoqRelays" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays cloudflare_moq_relays}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelays(
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
  asc: bool | IResolvable = None,
  created_after: str = None,
  created_before: str = None,
  max_items: typing.Union[int, float] = None,
  per_page: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.asc">asc</a></code> | <code>bool \| cdktn.IResolvable</code> | Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.createdAfter">created_after</a></code> | <code>str</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.createdBefore">created_before</a></code> | <code>str</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | Maximum number of relays to return per page. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#account_id DataCloudflareMoqRelays#account_id}

---

##### `asc`<sup>Optional</sup> <a name="asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.asc"></a>

- *Type:* bool | cdktn.IResolvable

Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#asc DataCloudflareMoqRelays#asc}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.createdAfter"></a>

- *Type:* str

Cursor for pagination.

Returns relays created strictly after this
RFC 3339 timestamp (typically the `created` value of the last item
on the current page, to fetch the next page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#created_after DataCloudflareMoqRelays#created_after}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.createdBefore"></a>

- *Type:* str

Cursor for pagination.

Returns relays created strictly before this
RFC 3339 timestamp (typically the `created` value of the first item
on the current page, to fetch the previous page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#created_before DataCloudflareMoqRelays#created_before}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#max_items DataCloudflareMoqRelays#max_items}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.Initializer.parameter.perPage"></a>

- *Type:* typing.Union[int, float]

Maximum number of relays to return per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#per_page DataCloudflareMoqRelays#per_page}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetAsc">reset_asc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedAfter">reset_created_after</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedBefore">reset_created_before</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetPerPage">reset_per_page</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_asc` <a name="reset_asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetAsc"></a>

```python
def reset_asc() -> None
```

##### `reset_created_after` <a name="reset_created_after" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedAfter"></a>

```python
def reset_created_after() -> None
```

##### `reset_created_before` <a name="reset_created_before" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetCreatedBefore"></a>

```python
def reset_created_before() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_per_page` <a name="reset_per_page" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.resetPerPage"></a>

```python
def reset_per_page() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareMoqRelays resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelays.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelays.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelays.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelays.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareMoqRelays resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMoqRelays to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMoqRelays that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMoqRelays to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList">DataCloudflareMoqRelaysResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.ascInput">asc_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfterInput">created_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBeforeInput">created_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPageInput">per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.asc">asc</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfter">created_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBefore">created_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.result"></a>

```python
result: DataCloudflareMoqRelaysResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList">DataCloudflareMoqRelaysResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `asc_input`<sup>Optional</sup> <a name="asc_input" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.ascInput"></a>

```python
asc_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `created_after_input`<sup>Optional</sup> <a name="created_after_input" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfterInput"></a>

```python
created_after_input: str
```

- *Type:* str

---

##### `created_before_input`<sup>Optional</sup> <a name="created_before_input" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBeforeInput"></a>

```python
created_before_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_page_input`<sup>Optional</sup> <a name="per_page_input" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPageInput"></a>

```python
per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `asc`<sup>Required</sup> <a name="asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.asc"></a>

```python
asc: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `created_after`<sup>Required</sup> <a name="created_after" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

---

##### `created_before`<sup>Required</sup> <a name="created_before" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_page`<sup>Required</sup> <a name="per_page" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelays.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMoqRelaysConfig <a name="DataCloudflareMoqRelaysConfig" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  asc: bool | IResolvable = None,
  created_after: str = None,
  created_before: str = None,
  max_items: typing.Union[int, float] = None,
  per_page: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.asc">asc</a></code> | <code>bool \| cdktn.IResolvable</code> | Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdAfter">created_after</a></code> | <code>str</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdBefore">created_before</a></code> | <code>str</code> | Cursor for pagination. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | Maximum number of relays to return per page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#account_id DataCloudflareMoqRelays#account_id}

---

##### `asc`<sup>Optional</sup> <a name="asc" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.asc"></a>

```python
asc: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Sort order by `created`. When true, results are returned oldest-first (ascending); otherwise newest-first (descending, the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#asc DataCloudflareMoqRelays#asc}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

Cursor for pagination.

Returns relays created strictly after this
RFC 3339 timestamp (typically the `created` value of the last item
on the current page, to fetch the next page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#created_after DataCloudflareMoqRelays#created_after}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

Cursor for pagination.

Returns relays created strictly before this
RFC 3339 timestamp (typically the `created` value of the first item
on the current page, to fetch the previous page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#created_before DataCloudflareMoqRelays#created_before}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#max_items DataCloudflareMoqRelays#max_items}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysConfig.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of relays to return per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/moq_relays#per_page DataCloudflareMoqRelays#per_page}

---

### DataCloudflareMoqRelaysResult <a name="DataCloudflareMoqRelaysResult" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMoqRelaysResultList <a name="DataCloudflareMoqRelaysResultList" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareMoqRelaysResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareMoqRelaysResultOutputReference <a name="DataCloudflareMoqRelaysResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_moq_relays

dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult">DataCloudflareMoqRelaysResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMoqRelaysResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMoqRelays.DataCloudflareMoqRelaysResult">DataCloudflareMoqRelaysResult</a>

---




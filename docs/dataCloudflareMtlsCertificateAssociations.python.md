# `dataCloudflareMtlsCertificateAssociations` Submodule <a name="`dataCloudflareMtlsCertificateAssociations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMtlsCertificateAssociations <a name="DataCloudflareMtlsCertificateAssociations" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/mtls_certificate_associations cloudflare_mtls_certificate_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_mtls_certificate_associations

dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations(
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
  mtls_certificate_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.mtlsCertificateId">mtls_certificate_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/mtls_certificate_associations#account_id DataCloudflareMtlsCertificateAssociations#account_id}

---

##### `mtls_certificate_id`<sup>Required</sup> <a name="mtls_certificate_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.Initializer.parameter.mtlsCertificateId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/mtls_certificate_associations#mtls_certificate_id DataCloudflareMtlsCertificateAssociations#mtls_certificate_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareMtlsCertificateAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_mtls_certificate_associations

dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_mtls_certificate_associations

dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_mtls_certificate_associations

dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_mtls_certificate_associations

dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareMtlsCertificateAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMtlsCertificateAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMtlsCertificateAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/mtls_certificate_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMtlsCertificateAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.mtlsCertificateIdInput">mtls_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.mtlsCertificateId">mtls_certificate_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `mtls_certificate_id_input`<sup>Optional</sup> <a name="mtls_certificate_id_input" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.mtlsCertificateIdInput"></a>

```python
mtls_certificate_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `mtls_certificate_id`<sup>Required</sup> <a name="mtls_certificate_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.mtlsCertificateId"></a>

```python
mtls_certificate_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMtlsCertificateAssociationsConfig <a name="DataCloudflareMtlsCertificateAssociationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_mtls_certificate_associations

dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  mtls_certificate_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.mtlsCertificateId">mtls_certificate_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/mtls_certificate_associations#account_id DataCloudflareMtlsCertificateAssociations#account_id}

---

##### `mtls_certificate_id`<sup>Required</sup> <a name="mtls_certificate_id" id="@cdktn/provider-cloudflare.dataCloudflareMtlsCertificateAssociations.DataCloudflareMtlsCertificateAssociationsConfig.property.mtlsCertificateId"></a>

```python
mtls_certificate_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/mtls_certificate_associations#mtls_certificate_id DataCloudflareMtlsCertificateAssociations#mtls_certificate_id}

---




# `dataCloudflareZeroTrustDlpProximityValidators` Submodule <a name="`dataCloudflareZeroTrustDlpProximityValidators` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpProximityValidators <a name="DataCloudflareZeroTrustDlpProximityValidators" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators cloudflare_zero_trust_dlp_proximity_validators}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidators(scope Construct, id *string, config DataCloudflareZeroTrustDlpProximityValidatorsConfig) DataCloudflareZeroTrustDlpProximityValidators
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig">DataCloudflareZeroTrustDlpProximityValidatorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig">DataCloudflareZeroTrustDlpProximityValidatorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidators resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidators_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidators_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidators_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidators_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidators resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpProximityValidators to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDlpProximityValidators that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpProximityValidators to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList">DataCloudflareZeroTrustDlpProximityValidatorsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.result"></a>

```go
func Result() DataCloudflareZeroTrustDlpProximityValidatorsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList">DataCloudflareZeroTrustDlpProximityValidatorsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpProximityValidatorsConfig <a name="DataCloudflareZeroTrustDlpProximityValidatorsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

&datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#account_id DataCloudflareZeroTrustDlpProximityValidators#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#account_id DataCloudflareZeroTrustDlpProximityValidators#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#max_items DataCloudflareZeroTrustDlpProximityValidators#max_items}

---

### DataCloudflareZeroTrustDlpProximityValidatorsResult <a name="DataCloudflareZeroTrustDlpProximityValidatorsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

&datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidatorsResult {

}
```


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

&datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy {

}
```


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

&datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries {

}
```


### DataCloudflareZeroTrustDlpProximityValidatorsResultWords <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultWords" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

&datacloudflarezerotrustdlpproximityvalidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpProximityValidatorsResultList <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidatorsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDlpProximityValidatorsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.referencedBy">ReferencedBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.words">Words</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList">DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult">DataCloudflareZeroTrustDlpProximityValidatorsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReferencedBy`<sup>Required</sup> <a name="ReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.referencedBy"></a>

```go
func ReferencedBy() DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.words"></a>

```go
func Words() DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList">DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpProximityValidatorsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult">DataCloudflareZeroTrustDlpProximityValidatorsResult</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entryCount">EntryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entries"></a>

```go
func Entries() DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList</a>

---

##### `EntryCount`<sup>Required</sup> <a name="EntryCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entryCount"></a>

```go
func EntryCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidatorsResultWordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidators"

datacloudflarezerotrustdlpproximityvalidators.NewDataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.weight">Weight</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.word">Word</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords">DataCloudflareZeroTrustDlpProximityValidatorsResultWords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.weight"></a>

```go
func Weight() *string
```

- *Type:* *string

---

##### `Word`<sup>Required</sup> <a name="Word" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.word"></a>

```go
func Word() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpProximityValidatorsResultWords
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords">DataCloudflareZeroTrustDlpProximityValidatorsResultWords</a>

---




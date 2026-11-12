# `dataCloudflareZeroTrustDlpProximityValidator` Submodule <a name="`dataCloudflareZeroTrustDlpProximityValidator` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpProximityValidator <a name="DataCloudflareZeroTrustDlpProximityValidator" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator cloudflare_zero_trust_dlp_proximity_validator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.NewDataCloudflareZeroTrustDlpProximityValidator(scope Construct, id *string, config DataCloudflareZeroTrustDlpProximityValidatorConfig) DataCloudflareZeroTrustDlpProximityValidator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig">DataCloudflareZeroTrustDlpProximityValidatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig">DataCloudflareZeroTrustDlpProximityValidatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidator_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpProximityValidator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustDlpProximityValidator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpProximityValidator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.referencedBy">ReferencedBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.words">Words</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList">DataCloudflareZeroTrustDlpProximityValidatorWordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorIdInput">ValidatorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorId">ValidatorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReferencedBy`<sup>Required</sup> <a name="ReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.referencedBy"></a>

```go
func ReferencedBy() DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.words"></a>

```go
func Words() DataCloudflareZeroTrustDlpProximityValidatorWordsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList">DataCloudflareZeroTrustDlpProximityValidatorWordsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ValidatorIdInput`<sup>Optional</sup> <a name="ValidatorIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorIdInput"></a>

```go
func ValidatorIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ValidatorId`<sup>Required</sup> <a name="ValidatorId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorId"></a>

```go
func ValidatorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpProximityValidatorConfig <a name="DataCloudflareZeroTrustDlpProximityValidatorConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

&datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ValidatorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#account_id DataCloudflareZeroTrustDlpProximityValidator#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.validatorId">ValidatorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#validator_id DataCloudflareZeroTrustDlpProximityValidator#validator_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#account_id DataCloudflareZeroTrustDlpProximityValidator#account_id}.

---

##### `ValidatorId`<sup>Required</sup> <a name="ValidatorId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.validatorId"></a>

```go
ValidatorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#validator_id DataCloudflareZeroTrustDlpProximityValidator#validator_id}.

---

### DataCloudflareZeroTrustDlpProximityValidatorReferencedBy <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

&datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy {

}
```


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

&datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries {

}
```


### DataCloudflareZeroTrustDlpProximityValidatorWords <a name="DataCloudflareZeroTrustDlpProximityValidatorWords" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

&datacloudflarezerotrustdlpproximityvalidator.DataCloudflareZeroTrustDlpProximityValidatorWords {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.NewDataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.NewDataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.NewDataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount">EntryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorReferencedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries"></a>

```go
func Entries() DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList</a>

---

##### `EntryCount`<sup>Required</sup> <a name="EntryCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount"></a>

```go
func EntryCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpProximityValidatorReferencedBy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorReferencedBy</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorWordsList <a name="DataCloudflareZeroTrustDlpProximityValidatorWordsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.NewDataCloudflareZeroTrustDlpProximityValidatorWordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustDlpProximityValidatorWordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustdlpproximityvalidator"

datacloudflarezerotrustdlpproximityvalidator.NewDataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.weight">Weight</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.word">Word</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords">DataCloudflareZeroTrustDlpProximityValidatorWords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.weight"></a>

```go
func Weight() *string
```

- *Type:* *string

---

##### `Word`<sup>Required</sup> <a name="Word" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.word"></a>

```go
func Word() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustDlpProximityValidatorWords
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords">DataCloudflareZeroTrustDlpProximityValidatorWords</a>

---




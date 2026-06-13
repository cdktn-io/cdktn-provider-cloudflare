# `dataCloudflareAiGatewayDynamicRouting` Submodule <a name="`dataCloudflareAiGatewayDynamicRouting` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiGatewayDynamicRouting <a name="DataCloudflareAiGatewayDynamicRouting" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRouting(scope Construct, id *string, config DataCloudflareAiGatewayDynamicRoutingConfig) DataCloudflareAiGatewayDynamicRouting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig">DataCloudflareAiGatewayDynamicRoutingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig">DataCloudflareAiGatewayDynamicRoutingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.resetAccountId"></a>

```go
func ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRouting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRouting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRouting_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRouting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareAiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAiGatewayDynamicRouting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAiGatewayDynamicRouting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiGatewayDynamicRouting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference">DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.elements">Elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList">DataCloudflareAiGatewayDynamicRoutingElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.version">Version</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference">DataCloudflareAiGatewayDynamicRoutingVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.deployment"></a>

```go
func Deployment() DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference">DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference</a>

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.elements"></a>

```go
func Elements() DataCloudflareAiGatewayDynamicRoutingElementsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList">DataCloudflareAiGatewayDynamicRoutingElementsList</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.version"></a>

```go
func Version() DataCloudflareAiGatewayDynamicRoutingVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference">DataCloudflareAiGatewayDynamicRoutingVersionOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRouting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiGatewayDynamicRoutingConfig <a name="DataCloudflareAiGatewayDynamicRoutingConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayId: *string,
	Id: *string,
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing#gateway_id DataCloudflareAiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing#id DataCloudflareAiGatewayDynamicRouting#id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing#account_id DataCloudflareAiGatewayDynamicRouting#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing#gateway_id DataCloudflareAiGatewayDynamicRouting#gateway_id}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing#id DataCloudflareAiGatewayDynamicRouting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/ai_gateway_dynamic_routing#account_id DataCloudflareAiGatewayDynamicRouting#account_id}.

---

### DataCloudflareAiGatewayDynamicRoutingDeployment <a name="DataCloudflareAiGatewayDynamicRoutingDeployment" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingDeployment {

}
```


### DataCloudflareAiGatewayDynamicRoutingElements <a name="DataCloudflareAiGatewayDynamicRoutingElements" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElements {

}
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputs <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputs" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs {

}
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback {

}
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse {

}
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext {

}
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess {

}
```


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue {

}
```


### DataCloudflareAiGatewayDynamicRoutingElementsProperties <a name="DataCloudflareAiGatewayDynamicRoutingElementsProperties" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties {

}
```


### DataCloudflareAiGatewayDynamicRoutingVersion <a name="DataCloudflareAiGatewayDynamicRoutingVersion" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

&datacloudflareaigatewaydynamicrouting.DataCloudflareAiGatewayDynamicRoutingVersion {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment">DataCloudflareAiGatewayDynamicRoutingDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingDeployment
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingDeployment">DataCloudflareAiGatewayDynamicRoutingDeployment</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsList <a name="DataCloudflareAiGatewayDynamicRoutingElementsList" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareAiGatewayDynamicRoutingElementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.get"></a>

```go
func Get(index *f64) DataCloudflareAiGatewayDynamicRoutingElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareAiGatewayDynamicRoutingElementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements">DataCloudflareAiGatewayDynamicRoutingElements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.outputs"></a>

```go
func Outputs() DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.properties"></a>

```go
func Properties() DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElements
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElements">DataCloudflareAiGatewayDynamicRoutingElements</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.false">False</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.next">Next</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.success">Success</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.true">True</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs">DataCloudflareAiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback"></a>

```go
func Fallback() DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a>

---

##### `False`<sup>Required</sup> <a name="False" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.false"></a>

```go
func False() DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a>

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.next"></a>

```go
func Next() DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.success"></a>

```go
func Success() DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a>

---

##### `True`<sup>Required</sup> <a name="True" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.true"></a>

```go
func True() DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElementsOutputs
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputs">DataCloudflareAiGatewayDynamicRoutingElementsOutputs</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess">DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue">DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue</a>

---


### DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">AiGatewayDynamicRoutingProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions">Conditions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType">LimitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window">Window</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties">DataCloudflareAiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="AiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```go
func AiGatewayDynamicRoutingProvider() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions"></a>

```go
func Conditions() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType"></a>

```go
func LimitType() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window"></a>

```go
func Window() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingElementsProperties
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingElementsProperties">DataCloudflareAiGatewayDynamicRoutingElementsProperties</a>

---


### DataCloudflareAiGatewayDynamicRoutingVersionOutputReference <a name="DataCloudflareAiGatewayDynamicRoutingVersionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflareaigatewaydynamicrouting"

datacloudflareaigatewaydynamicrouting.NewDataCloudflareAiGatewayDynamicRoutingVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAiGatewayDynamicRoutingVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.active">Active</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.isValid">IsValid</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion">DataCloudflareAiGatewayDynamicRoutingVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.active"></a>

```go
func Active() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.isValid"></a>

```go
func IsValid() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAiGatewayDynamicRoutingVersion
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGatewayDynamicRouting.DataCloudflareAiGatewayDynamicRoutingVersion">DataCloudflareAiGatewayDynamicRoutingVersion</a>

---




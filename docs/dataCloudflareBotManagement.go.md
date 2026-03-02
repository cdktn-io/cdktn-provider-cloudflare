# `dataCloudflareBotManagement` Submodule <a name="`dataCloudflareBotManagement` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareBotManagement <a name="DataCloudflareBotManagement" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

datacloudflarebotmanagement.NewDataCloudflareBotManagement(scope Construct, id *string, config DataCloudflareBotManagementConfig) DataCloudflareBotManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig">DataCloudflareBotManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig">DataCloudflareBotManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareBotManagement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

datacloudflarebotmanagement.DataCloudflareBotManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

datacloudflarebotmanagement.DataCloudflareBotManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

datacloudflarebotmanagement.DataCloudflareBotManagement_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

datacloudflarebotmanagement.DataCloudflareBotManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareBotManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareBotManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareBotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareBotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.aiBotsProtection">AiBotsProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.bmCookieEnabled">BmCookieEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cfRobotsVariant">CfRobotsVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.crawlerProtection">CrawlerProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.enableJs">EnableJs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fightMode">FightMode</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.isRobotsTxtManaged">IsRobotsTxtManaged</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.staleZoneConfiguration">StaleZoneConfiguration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference">DataCloudflareBotManagementStaleZoneConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.usingLatestModel">UsingLatestModel</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AiBotsProtection`<sup>Required</sup> <a name="AiBotsProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.aiBotsProtection"></a>

```go
func AiBotsProtection() *string
```

- *Type:* *string

---

##### `AutoUpdateModel`<sup>Required</sup> <a name="AutoUpdateModel" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.autoUpdateModel"></a>

```go
func AutoUpdateModel() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BmCookieEnabled`<sup>Required</sup> <a name="BmCookieEnabled" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.bmCookieEnabled"></a>

```go
func BmCookieEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CfRobotsVariant`<sup>Required</sup> <a name="CfRobotsVariant" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cfRobotsVariant"></a>

```go
func CfRobotsVariant() *string
```

- *Type:* *string

---

##### `CrawlerProtection`<sup>Required</sup> <a name="CrawlerProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.crawlerProtection"></a>

```go
func CrawlerProtection() *string
```

- *Type:* *string

---

##### `EnableJs`<sup>Required</sup> <a name="EnableJs" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.enableJs"></a>

```go
func EnableJs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fightMode"></a>

```go
func FightMode() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRobotsTxtManaged`<sup>Required</sup> <a name="IsRobotsTxtManaged" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.isRobotsTxtManaged"></a>

```go
func IsRobotsTxtManaged() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.optimizeWordpress"></a>

```go
func OptimizeWordpress() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmDefinitelyAutomated"></a>

```go
func SbfmDefinitelyAutomated() *string
```

- *Type:* *string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmLikelyAutomated"></a>

```go
func SbfmLikelyAutomated() *string
```

- *Type:* *string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmStaticResourceProtection"></a>

```go
func SbfmStaticResourceProtection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmVerifiedBots"></a>

```go
func SbfmVerifiedBots() *string
```

- *Type:* *string

---

##### `StaleZoneConfiguration`<sup>Required</sup> <a name="StaleZoneConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.staleZoneConfiguration"></a>

```go
func StaleZoneConfiguration() DataCloudflareBotManagementStaleZoneConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference">DataCloudflareBotManagementStaleZoneConfigurationOutputReference</a>

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.suppressSessionScore"></a>

```go
func SuppressSessionScore() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UsingLatestModel`<sup>Required</sup> <a name="UsingLatestModel" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.usingLatestModel"></a>

```go
func UsingLatestModel() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareBotManagementConfig <a name="DataCloudflareBotManagementConfig" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

&datacloudflarebotmanagement.DataCloudflareBotManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/bot_management#zone_id DataCloudflareBotManagement#zone_id}

---

### DataCloudflareBotManagementStaleZoneConfiguration <a name="DataCloudflareBotManagementStaleZoneConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

&datacloudflarebotmanagement.DataCloudflareBotManagementStaleZoneConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareBotManagementStaleZoneConfigurationOutputReference <a name="DataCloudflareBotManagementStaleZoneConfigurationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarebotmanagement"

datacloudflarebotmanagement.NewDataCloudflareBotManagementStaleZoneConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareBotManagementStaleZoneConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fightMode">FightMode</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration">DataCloudflareBotManagementStaleZoneConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fightMode"></a>

```go
func FightMode() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress"></a>

```go
func OptimizeWordpress() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated"></a>

```go
func SbfmDefinitelyAutomated() *string
```

- *Type:* *string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated"></a>

```go
func SbfmLikelyAutomated() *string
```

- *Type:* *string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection"></a>

```go
func SbfmStaticResourceProtection() *string
```

- *Type:* *string

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots"></a>

```go
func SbfmVerifiedBots() *string
```

- *Type:* *string

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore"></a>

```go
func SuppressSessionScore() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareBotManagementStaleZoneConfiguration
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration">DataCloudflareBotManagementStaleZoneConfiguration</a>

---




# `dataCloudflarePageShieldScripts` Submodule <a name="`dataCloudflarePageShieldScripts` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldScripts <a name="DataCloudflarePageShieldScripts" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

datacloudflarepageshieldscripts.NewDataCloudflarePageShieldScripts(scope Construct, id *string, config DataCloudflarePageShieldScriptsConfig) DataCloudflarePageShieldScripts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig">DataCloudflarePageShieldScriptsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig">DataCloudflarePageShieldScriptsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePageShieldScripts resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

datacloudflarepageshieldscripts.DataCloudflarePageShieldScripts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

datacloudflarepageshieldscripts.DataCloudflarePageShieldScripts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

datacloudflarepageshieldscripts.DataCloudflarePageShieldScripts_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

datacloudflarepageshieldscripts.DataCloudflarePageShieldScripts_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflarePageShieldScripts resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflarePageShieldScripts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflarePageShieldScripts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_scripts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldScripts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.addedAt">AddedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cryptominingScore">CryptominingScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dataflowScore">DataflowScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.domainReportedMalicious">DomainReportedMalicious</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fetchedAt">FetchedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstPageUrl">FirstPageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstSeenAt">FirstSeenAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.jsIntegrityScore">JsIntegrityScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lastSeenAt">LastSeenAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.magecartScore">MagecartScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousDomainCategories">MaliciousDomainCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousUrlCategories">MaliciousUrlCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.malwareScore">MalwareScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.obfuscationScore">ObfuscationScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.pageUrls">PageUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlContainsCdnCgiPath">UrlContainsCdnCgiPath</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlReportedMalicious">UrlReportedMalicious</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList">DataCloudflarePageShieldScriptsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptIdInput">ScriptIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptId">ScriptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.addedAt"></a>

```go
func AddedAt() *string
```

- *Type:* *string

---

##### `CryptominingScore`<sup>Required</sup> <a name="CryptominingScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cryptominingScore"></a>

```go
func CryptominingScore() *f64
```

- *Type:* *f64

---

##### `DataflowScore`<sup>Required</sup> <a name="DataflowScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dataflowScore"></a>

```go
func DataflowScore() *f64
```

- *Type:* *f64

---

##### `DomainReportedMalicious`<sup>Required</sup> <a name="DomainReportedMalicious" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.domainReportedMalicious"></a>

```go
func DomainReportedMalicious() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FetchedAt`<sup>Required</sup> <a name="FetchedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fetchedAt"></a>

```go
func FetchedAt() *string
```

- *Type:* *string

---

##### `FirstPageUrl`<sup>Required</sup> <a name="FirstPageUrl" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstPageUrl"></a>

```go
func FirstPageUrl() *string
```

- *Type:* *string

---

##### `FirstSeenAt`<sup>Required</sup> <a name="FirstSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstSeenAt"></a>

```go
func FirstSeenAt() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JsIntegrityScore`<sup>Required</sup> <a name="JsIntegrityScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.jsIntegrityScore"></a>

```go
func JsIntegrityScore() *f64
```

- *Type:* *f64

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lastSeenAt"></a>

```go
func LastSeenAt() *string
```

- *Type:* *string

---

##### `MagecartScore`<sup>Required</sup> <a name="MagecartScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.magecartScore"></a>

```go
func MagecartScore() *f64
```

- *Type:* *f64

---

##### `MaliciousDomainCategories`<sup>Required</sup> <a name="MaliciousDomainCategories" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousDomainCategories"></a>

```go
func MaliciousDomainCategories() *[]*string
```

- *Type:* *[]*string

---

##### `MaliciousUrlCategories`<sup>Required</sup> <a name="MaliciousUrlCategories" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousUrlCategories"></a>

```go
func MaliciousUrlCategories() *[]*string
```

- *Type:* *[]*string

---

##### `MalwareScore`<sup>Required</sup> <a name="MalwareScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.malwareScore"></a>

```go
func MalwareScore() *f64
```

- *Type:* *f64

---

##### `ObfuscationScore`<sup>Required</sup> <a name="ObfuscationScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.obfuscationScore"></a>

```go
func ObfuscationScore() *f64
```

- *Type:* *f64

---

##### `PageUrls`<sup>Required</sup> <a name="PageUrls" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.pageUrls"></a>

```go
func PageUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlContainsCdnCgiPath`<sup>Required</sup> <a name="UrlContainsCdnCgiPath" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlContainsCdnCgiPath"></a>

```go
func UrlContainsCdnCgiPath() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UrlReportedMalicious`<sup>Required</sup> <a name="UrlReportedMalicious" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlReportedMalicious"></a>

```go
func UrlReportedMalicious() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.versions"></a>

```go
func Versions() DataCloudflarePageShieldScriptsVersionsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList">DataCloudflarePageShieldScriptsVersionsList</a>

---

##### `ScriptIdInput`<sup>Optional</sup> <a name="ScriptIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptIdInput"></a>

```go
func ScriptIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptId"></a>

```go
func ScriptId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldScriptsConfig <a name="DataCloudflarePageShieldScriptsConfig" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

&datacloudflarepageshieldscripts.DataCloudflarePageShieldScriptsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ScriptId: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.scriptId">ScriptId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.scriptId"></a>

```go
ScriptId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_scripts#script_id DataCloudflarePageShieldScripts#script_id}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/page_shield_scripts#zone_id DataCloudflarePageShieldScripts#zone_id}

---

### DataCloudflarePageShieldScriptsVersions <a name="DataCloudflarePageShieldScriptsVersions" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

&datacloudflarepageshieldscripts.DataCloudflarePageShieldScriptsVersions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldScriptsVersionsList <a name="DataCloudflarePageShieldScriptsVersionsList" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

datacloudflarepageshieldscripts.NewDataCloudflarePageShieldScriptsVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflarePageShieldScriptsVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get"></a>

```go
func Get(index *f64) DataCloudflarePageShieldScriptsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflarePageShieldScriptsVersionsOutputReference <a name="DataCloudflarePageShieldScriptsVersionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarepageshieldscripts"

datacloudflarepageshieldscripts.NewDataCloudflarePageShieldScriptsVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflarePageShieldScriptsVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.cryptominingScore">CryptominingScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.dataflowScore">DataflowScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fetchedAt">FetchedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.jsIntegrityScore">JsIntegrityScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.magecartScore">MagecartScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.malwareScore">MalwareScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.obfuscationScore">ObfuscationScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions">DataCloudflarePageShieldScriptsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CryptominingScore`<sup>Required</sup> <a name="CryptominingScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.cryptominingScore"></a>

```go
func CryptominingScore() *f64
```

- *Type:* *f64

---

##### `DataflowScore`<sup>Required</sup> <a name="DataflowScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.dataflowScore"></a>

```go
func DataflowScore() *f64
```

- *Type:* *f64

---

##### `FetchedAt`<sup>Required</sup> <a name="FetchedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fetchedAt"></a>

```go
func FetchedAt() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `JsIntegrityScore`<sup>Required</sup> <a name="JsIntegrityScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.jsIntegrityScore"></a>

```go
func JsIntegrityScore() *f64
```

- *Type:* *f64

---

##### `MagecartScore`<sup>Required</sup> <a name="MagecartScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.magecartScore"></a>

```go
func MagecartScore() *f64
```

- *Type:* *f64

---

##### `MalwareScore`<sup>Required</sup> <a name="MalwareScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.malwareScore"></a>

```go
func MalwareScore() *f64
```

- *Type:* *f64

---

##### `ObfuscationScore`<sup>Required</sup> <a name="ObfuscationScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.obfuscationScore"></a>

```go
func ObfuscationScore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePageShieldScriptsVersions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions">DataCloudflarePageShieldScriptsVersions</a>

---




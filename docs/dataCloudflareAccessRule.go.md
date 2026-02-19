# `dataCloudflareAccessRule` Submodule <a name="`dataCloudflareAccessRule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccessRule <a name="DataCloudflareAccessRule" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule cloudflare_access_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.NewDataCloudflareAccessRule(scope Construct, id *string, config DataCloudflareAccessRuleConfig) DataCloudflareAccessRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig">DataCloudflareAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig">DataCloudflareAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.putFilter"></a>

```go
func PutFilter(value DataCloudflareAccessRuleFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter">DataCloudflareAccessRuleFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAccessRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.DataCloudflareAccessRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.DataCloudflareAccessRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.DataCloudflareAccessRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.DataCloudflareAccessRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareAccessRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.allowedModes">AllowedModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference">DataCloudflareAccessRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference">DataCloudflareAccessRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference">DataCloudflareAccessRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AllowedModes`<sup>Required</sup> <a name="AllowedModes" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.allowedModes"></a>

```go
func AllowedModes() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.configuration"></a>

```go
func Configuration() DataCloudflareAccessRuleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference">DataCloudflareAccessRuleConfigurationOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.filter"></a>

```go
func Filter() DataCloudflareAccessRuleFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference">DataCloudflareAccessRuleFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.scope"></a>

```go
func Scope() DataCloudflareAccessRuleScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference">DataCloudflareAccessRuleScopeOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccessRuleConfig <a name="DataCloudflareAccessRuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

&datacloudflareaccessrule.DataCloudflareAccessRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter,
	RuleId: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter">DataCloudflareAccessRuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#filter DataCloudflareAccessRule#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.ruleId">RuleId</a></code> | <code>*string</code> | Unique identifier for a rule. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#account_id DataCloudflareAccessRule#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.filter"></a>

```go
Filter DataCloudflareAccessRuleFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter">DataCloudflareAccessRuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#filter DataCloudflareAccessRule#filter}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Unique identifier for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#rule_id DataCloudflareAccessRule#rule_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#zone_id DataCloudflareAccessRule#zone_id}

---

### DataCloudflareAccessRuleConfiguration <a name="DataCloudflareAccessRuleConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

&datacloudflareaccessrule.DataCloudflareAccessRuleConfiguration {

}
```


### DataCloudflareAccessRuleFilter <a name="DataCloudflareAccessRuleFilter" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

&datacloudflareaccessrule.DataCloudflareAccessRuleFilter {
	Configuration: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration,
	Direction: *string,
	Match: *string,
	Mode: *string,
	Notes: *string,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration">DataCloudflareAccessRuleFilterConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#configuration DataCloudflareAccessRule#configuration}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.direction">Direction</a></code> | <code>*string</code> | Defines the direction used to sort returned rules. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.match">Match</a></code> | <code>*string</code> | Defines the search requirements. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.mode">Mode</a></code> | <code>*string</code> | The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.notes">Notes</a></code> | <code>*string</code> | Defines the string to search for in the notes of existing IP Access rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.order">Order</a></code> | <code>*string</code> | Defines the field used to sort returned rules. Available values: "configuration.target", "configuration.value", "mode". |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.configuration"></a>

```go
Configuration DataCloudflareAccessRuleFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration">DataCloudflareAccessRuleFilterConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#configuration DataCloudflareAccessRule#configuration}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Defines the direction used to sort returned rules. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#direction DataCloudflareAccessRule#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.match"></a>

```go
Match *string
```

- *Type:* *string

Defines the search requirements.

When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#match DataCloudflareAccessRule#match}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#mode DataCloudflareAccessRule#mode}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Defines the string to search for in the notes of existing IP Access rules.

Notes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#notes DataCloudflareAccessRule#notes}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Defines the field used to sort returned rules. Available values: "configuration.target", "configuration.value", "mode".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#order DataCloudflareAccessRule#order}

---

### DataCloudflareAccessRuleFilterConfiguration <a name="DataCloudflareAccessRuleFilterConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

&datacloudflareaccessrule.DataCloudflareAccessRuleFilterConfiguration {
	Target: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration.property.target">Target</a></code> | <code>*string</code> | Defines the target to search in existing rules. Available values: "ip", "ip_range", "asn", "country". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration.property.value">Value</a></code> | <code>*string</code> | Defines the target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`. Notes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration.property.target"></a>

```go
Target *string
```

- *Type:* *string

Defines the target to search in existing rules. Available values: "ip", "ip_range", "asn", "country".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#target DataCloudflareAccessRule#target}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration.property.value"></a>

```go
Value *string
```

- *Type:* *string

Defines the target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`. Notes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/access_rule#value DataCloudflareAccessRule#value}

---

### DataCloudflareAccessRuleScope <a name="DataCloudflareAccessRuleScope" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

&datacloudflareaccessrule.DataCloudflareAccessRuleScope {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccessRuleConfigurationOutputReference <a name="DataCloudflareAccessRuleConfigurationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.NewDataCloudflareAccessRuleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccessRuleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfiguration">DataCloudflareAccessRuleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccessRuleConfiguration
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleConfiguration">DataCloudflareAccessRuleConfiguration</a>

---


### DataCloudflareAccessRuleFilterConfigurationOutputReference <a name="DataCloudflareAccessRuleFilterConfigurationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.NewDataCloudflareAccessRuleFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccessRuleFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareAccessRuleFilterOutputReference <a name="DataCloudflareAccessRuleFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.NewDataCloudflareAccessRuleFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccessRuleFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.putConfiguration"></a>

```go
func PutConfiguration(value DataCloudflareAccessRuleFilterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfiguration">DataCloudflareAccessRuleFilterConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference">DataCloudflareAccessRuleFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.configuration"></a>

```go
func Configuration() DataCloudflareAccessRuleFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterConfigurationOutputReference">DataCloudflareAccessRuleFilterConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareAccessRuleScopeOutputReference <a name="DataCloudflareAccessRuleScopeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccessrule"

datacloudflareaccessrule.NewDataCloudflareAccessRuleScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccessRuleScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScope">DataCloudflareAccessRuleScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccessRuleScope
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccessRule.DataCloudflareAccessRuleScope">DataCloudflareAccessRuleScope</a>

---




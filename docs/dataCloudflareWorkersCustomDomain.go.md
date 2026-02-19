# `dataCloudflareWorkersCustomDomain` Submodule <a name="`dataCloudflareWorkersCustomDomain` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersCustomDomain <a name="DataCloudflareWorkersCustomDomain" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

datacloudflareworkerscustomdomain.NewDataCloudflareWorkersCustomDomain(scope Construct, id *string, config DataCloudflareWorkersCustomDomainConfig) DataCloudflareWorkersCustomDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig">DataCloudflareWorkersCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig">DataCloudflareWorkersCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter"></a>

```go
func PutFilter(value DataCloudflareWorkersCustomDomainFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

---

##### `ResetDomainId` <a name="ResetDomainId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetDomainId"></a>

```go
func ResetDomainId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetFilter"></a>

```go
func ResetFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

datacloudflareworkerscustomdomain.DataCloudflareWorkersCustomDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

datacloudflareworkerscustomdomain.DataCloudflareWorkersCustomDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

datacloudflareworkerscustomdomain.DataCloudflareWorkersCustomDomain_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

datacloudflareworkerscustomdomain.DataCloudflareWorkersCustomDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWorkersCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWorkersCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference">DataCloudflareWorkersCustomDomainFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filter"></a>

```go
func Filter() DataCloudflareWorkersCustomDomainFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference">DataCloudflareWorkersCustomDomainFilterOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersCustomDomainConfig <a name="DataCloudflareWorkersCustomDomainConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

&datacloudflareworkerscustomdomain.DataCloudflareWorkersCustomDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	DomainId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifer of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.domainId">DomainId</a></code> | <code>*string</code> | Identifer of the Worker Domain. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifer of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#account_id DataCloudflareWorkersCustomDomain#account_id}

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

Identifer of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#domain_id DataCloudflareWorkersCustomDomain#domain_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.filter"></a>

```go
Filter DataCloudflareWorkersCustomDomainFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}.

---

### DataCloudflareWorkersCustomDomainFilter <a name="DataCloudflareWorkersCustomDomainFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

&datacloudflareworkerscustomdomain.DataCloudflareWorkersCustomDomainFilter {
	Environment: *string,
	Hostname: *string,
	Service: *string,
	ZoneId: *string,
	ZoneName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.environment">Environment</a></code> | <code>*string</code> | Worker environment associated with the zone and hostname. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of the Worker Domain. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.service">Service</a></code> | <code>*string</code> | Worker service associated with the zone and hostname. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier of the zone. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneName">ZoneName</a></code> | <code>*string</code> | Name of the zone. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Worker environment associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#environment DataCloudflareWorkersCustomDomain#environment}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#hostname DataCloudflareWorkersCustomDomain#hostname}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.service"></a>

```go
Service *string
```

- *Type:* *string

Worker service associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#service DataCloudflareWorkersCustomDomain#service}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#zone_id DataCloudflareWorkersCustomDomain#zone_id}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

Name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/workers_custom_domain#zone_name DataCloudflareWorkersCustomDomain#zone_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersCustomDomainFilterOutputReference <a name="DataCloudflareWorkersCustomDomainFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareworkerscustomdomain"

datacloudflareworkerscustomdomain.NewDataCloudflareWorkersCustomDomainFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWorkersCustomDomainFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneName"></a>

```go
func ResetZoneName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




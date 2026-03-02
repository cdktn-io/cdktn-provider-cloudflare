# `dataCloudflareDnsZoneTransfersAcls` Submodule <a name="`dataCloudflareDnsZoneTransfersAcls` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersAcls <a name="DataCloudflareDnsZoneTransfersAcls" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/dns_zone_transfers_acls cloudflare_dns_zone_transfers_acls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

datacloudflarednszonetransfersacls.NewDataCloudflareDnsZoneTransfersAcls(scope Construct, id *string, config DataCloudflareDnsZoneTransfersAclsConfig) DataCloudflareDnsZoneTransfersAcls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig">DataCloudflareDnsZoneTransfersAclsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig">DataCloudflareDnsZoneTransfersAclsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersAcls resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

datacloudflarednszonetransfersacls.DataCloudflareDnsZoneTransfersAcls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

datacloudflarednszonetransfersacls.DataCloudflareDnsZoneTransfersAcls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

datacloudflarednszonetransfersacls.DataCloudflareDnsZoneTransfersAcls_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

datacloudflarednszonetransfersacls.DataCloudflareDnsZoneTransfersAcls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersAcls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersAcls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareDnsZoneTransfersAcls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/dns_zone_transfers_acls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersAcls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList">DataCloudflareDnsZoneTransfersAclsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.result"></a>

```go
func Result() DataCloudflareDnsZoneTransfersAclsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList">DataCloudflareDnsZoneTransfersAclsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAcls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersAclsConfig <a name="DataCloudflareDnsZoneTransfersAclsConfig" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

&datacloudflarednszonetransfersacls.DataCloudflareDnsZoneTransfersAclsConfig {
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
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/dns_zone_transfers_acls#account_id DataCloudflareDnsZoneTransfersAcls#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/dns_zone_transfers_acls#account_id DataCloudflareDnsZoneTransfersAcls#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/dns_zone_transfers_acls#max_items DataCloudflareDnsZoneTransfersAcls#max_items}

---

### DataCloudflareDnsZoneTransfersAclsResult <a name="DataCloudflareDnsZoneTransfersAclsResult" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

&datacloudflarednszonetransfersacls.DataCloudflareDnsZoneTransfersAclsResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsZoneTransfersAclsResultList <a name="DataCloudflareDnsZoneTransfersAclsResultList" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

datacloudflarednszonetransfersacls.NewDataCloudflareDnsZoneTransfersAclsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareDnsZoneTransfersAclsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareDnsZoneTransfersAclsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareDnsZoneTransfersAclsResultOutputReference <a name="DataCloudflareDnsZoneTransfersAclsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarednszonetransfersacls"

datacloudflarednszonetransfersacls.NewDataCloudflareDnsZoneTransfersAclsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareDnsZoneTransfersAclsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResult">DataCloudflareDnsZoneTransfersAclsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareDnsZoneTransfersAclsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcls.DataCloudflareDnsZoneTransfersAclsResult">DataCloudflareDnsZoneTransfersAclsResult</a>

---




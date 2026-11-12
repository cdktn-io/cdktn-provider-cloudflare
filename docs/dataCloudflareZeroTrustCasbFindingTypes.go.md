# `dataCloudflareZeroTrustCasbFindingTypes` Submodule <a name="`dataCloudflareZeroTrustCasbFindingTypes` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbFindingTypes <a name="DataCloudflareZeroTrustCasbFindingTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types cloudflare_zero_trust_casb_finding_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.NewDataCloudflareZeroTrustCasbFindingTypes(scope Construct, id *string, config DataCloudflareZeroTrustCasbFindingTypesConfig) DataCloudflareZeroTrustCasbFindingTypes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig">DataCloudflareZeroTrustCasbFindingTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig">DataCloudflareZeroTrustCasbFindingTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxUpdatedAt">ResetMaxUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMinUpdatedAt">ResetMinUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrigins">ResetOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetQuarantined">ResetQuarantined</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSeverities">ResetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetVendors">ResetVendors</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetMaxUpdatedAt` <a name="ResetMaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMaxUpdatedAt"></a>

```go
func ResetMaxUpdatedAt()
```

##### `ResetMinUpdatedAt` <a name="ResetMinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetMinUpdatedAt"></a>

```go
func ResetMinUpdatedAt()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetOrigins` <a name="ResetOrigins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetOrigins"></a>

```go
func ResetOrigins()
```

##### `ResetQuarantined` <a name="ResetQuarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetQuarantined"></a>

```go
func ResetQuarantined()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetSeverities"></a>

```go
func ResetSeverities()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetTypes"></a>

```go
func ResetTypes()
```

##### `ResetVendors` <a name="ResetVendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.resetVendors"></a>

```go
func ResetVendors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingTypes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.DataCloudflareZeroTrustCasbFindingTypes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.DataCloudflareZeroTrustCasbFindingTypes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.DataCloudflareZeroTrustCasbFindingTypes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.DataCloudflareZeroTrustCasbFindingTypes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingTypes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustCasbFindingTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList">DataCloudflareZeroTrustCasbFindingTypesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAtInput">MaxUpdatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAtInput">MinUpdatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.originsInput">OriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantinedInput">QuarantinedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severitiesInput">SeveritiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.typesInput">TypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendorsInput">VendorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAt">MaxUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAt">MinUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.origins">Origins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantined">Quarantined</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severities">Severities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendors">Vendors</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.result"></a>

```go
func Result() DataCloudflareZeroTrustCasbFindingTypesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList">DataCloudflareZeroTrustCasbFindingTypesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `MaxUpdatedAtInput`<sup>Optional</sup> <a name="MaxUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAtInput"></a>

```go
func MaxUpdatedAtInput() *string
```

- *Type:* *string

---

##### `MinUpdatedAtInput`<sup>Optional</sup> <a name="MinUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAtInput"></a>

```go
func MinUpdatedAtInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.originsInput"></a>

```go
func OriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QuarantinedInput`<sup>Optional</sup> <a name="QuarantinedInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantinedInput"></a>

```go
func QuarantinedInput() interface{}
```

- *Type:* interface{}

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severitiesInput"></a>

```go
func SeveritiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.typesInput"></a>

```go
func TypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VendorsInput`<sup>Optional</sup> <a name="VendorsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendorsInput"></a>

```go
func VendorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `MaxUpdatedAt`<sup>Required</sup> <a name="MaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.maxUpdatedAt"></a>

```go
func MaxUpdatedAt() *string
```

- *Type:* *string

---

##### `MinUpdatedAt`<sup>Required</sup> <a name="MinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.minUpdatedAt"></a>

```go
func MinUpdatedAt() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.origins"></a>

```go
func Origins() *[]*string
```

- *Type:* *[]*string

---

##### `Quarantined`<sup>Required</sup> <a name="Quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.quarantined"></a>

```go
func Quarantined() interface{}
```

- *Type:* interface{}

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.severities"></a>

```go
func Severities() *[]*string
```

- *Type:* *[]*string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `Vendors`<sup>Required</sup> <a name="Vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.vendors"></a>

```go
func Vendors() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbFindingTypesConfig <a name="DataCloudflareZeroTrustCasbFindingTypesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

&datacloudflarezerotrustcasbfindingtypes.DataCloudflareZeroTrustCasbFindingTypesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Direction: *string,
	MaxItems: *f64,
	MaxUpdatedAt: *string,
	MinUpdatedAt: *string,
	Order: *string,
	Origins: *[]*string,
	Quarantined: interface{},
	Search: *string,
	Severities: *[]*string,
	Types: *[]*string,
	Vendors: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#account_id DataCloudflareZeroTrustCasbFindingTypes#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.direction">Direction</a></code> | <code>*string</code> | Sort direction for the primary field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxUpdatedAt">MaxUpdatedAt</a></code> | <code>*string</code> | Return only finding types updated at or before this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.minUpdatedAt">MinUpdatedAt</a></code> | <code>*string</code> | Return only finding types updated at or after this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.order">Order</a></code> | <code>*string</code> | Field to sort by (case-insensitive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.origins">Origins</a></code> | <code>*[]*string</code> | Filter finding types by origin. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.quarantined">Quarantined</a></code> | <code>interface{}</code> | When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.search">Search</a></code> | <code>*string</code> | Filter finding types by name or ID (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.severities">Severities</a></code> | <code>*[]*string</code> | Filter finding types by severity. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.types">Types</a></code> | <code>*[]*string</code> | Filter finding types by category type. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.vendors">Vendors</a></code> | <code>*[]*string</code> | Filter finding types by vendor. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#account_id DataCloudflareZeroTrustCasbFindingTypes#account_id}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#direction DataCloudflareZeroTrustCasbFindingTypes#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_items DataCloudflareZeroTrustCasbFindingTypes#max_items}

---

##### `MaxUpdatedAt`<sup>Optional</sup> <a name="MaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.maxUpdatedAt"></a>

```go
MaxUpdatedAt *string
```

- *Type:* *string

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_updated_at DataCloudflareZeroTrustCasbFindingTypes#max_updated_at}

---

##### `MinUpdatedAt`<sup>Optional</sup> <a name="MinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.minUpdatedAt"></a>

```go
MinUpdatedAt *string
```

- *Type:* *string

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#min_updated_at DataCloudflareZeroTrustCasbFindingTypes#min_updated_at}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#order DataCloudflareZeroTrustCasbFindingTypes#order}

---

##### `Origins`<sup>Optional</sup> <a name="Origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.origins"></a>

```go
Origins *[]*string
```

- *Type:* *[]*string

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#origins DataCloudflareZeroTrustCasbFindingTypes#origins}

---

##### `Quarantined`<sup>Optional</sup> <a name="Quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.quarantined"></a>

```go
Quarantined interface{}
```

- *Type:* interface{}

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#quarantined DataCloudflareZeroTrustCasbFindingTypes#quarantined}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#search DataCloudflareZeroTrustCasbFindingTypes#search}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.severities"></a>

```go
Severities *[]*string
```

- *Type:* *[]*string

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#severities DataCloudflareZeroTrustCasbFindingTypes#severities}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.types"></a>

```go
Types *[]*string
```

- *Type:* *[]*string

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#types DataCloudflareZeroTrustCasbFindingTypes#types}

---

##### `Vendors`<sup>Optional</sup> <a name="Vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesConfig.property.vendors"></a>

```go
Vendors *[]*string
```

- *Type:* *[]*string

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#vendors DataCloudflareZeroTrustCasbFindingTypes#vendors}

---

### DataCloudflareZeroTrustCasbFindingTypesResult <a name="DataCloudflareZeroTrustCasbFindingTypesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

&datacloudflarezerotrustcasbfindingtypes.DataCloudflareZeroTrustCasbFindingTypesResult {

}
```


### DataCloudflareZeroTrustCasbFindingTypesResultCategory <a name="DataCloudflareZeroTrustCasbFindingTypesResultCategory" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

&datacloudflarezerotrustcasbfindingtypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.NewDataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.observation">Observation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory">DataCloudflareZeroTrustCasbFindingTypesResultCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Observation`<sup>Required</sup> <a name="Observation" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.observation"></a>

```go
func Observation() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustCasbFindingTypesResultCategory
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategory">DataCloudflareZeroTrustCasbFindingTypesResultCategory</a>

---


### DataCloudflareZeroTrustCasbFindingTypesResultList <a name="DataCloudflareZeroTrustCasbFindingTypesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.NewDataCloudflareZeroTrustCasbFindingTypesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustCasbFindingTypesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustCasbFindingTypesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustCasbFindingTypesResultOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcasbfindingtypes"

datacloudflarezerotrustcasbfindingtypes.NewDataCloudflareZeroTrustCasbFindingTypesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustCasbFindingTypesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.appliesToAllIntegrations">AppliesToAllIntegrations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetClass">AssetClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetVendor">AssetVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.category">Category</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.integrationIds">IntegrationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.matchCount">MatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.quarantined">Quarantined</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult">DataCloudflareZeroTrustCasbFindingTypesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppliesToAllIntegrations`<sup>Required</sup> <a name="AppliesToAllIntegrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.appliesToAllIntegrations"></a>

```go
func AppliesToAllIntegrations() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AssetClass`<sup>Required</sup> <a name="AssetClass" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetClass"></a>

```go
func AssetClass() *string
```

- *Type:* *string

---

##### `AssetVendor`<sup>Required</sup> <a name="AssetVendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.assetVendor"></a>

```go
func AssetVendor() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.category"></a>

```go
func Category() DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationIds`<sup>Required</sup> <a name="IntegrationIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.integrationIds"></a>

```go
func IntegrationIds() *[]*string
```

- *Type:* *[]*string

---

##### `MatchCount`<sup>Required</sup> <a name="MatchCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.matchCount"></a>

```go
func MatchCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Quarantined`<sup>Required</sup> <a name="Quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.quarantined"></a>

```go
func Quarantined() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustCasbFindingTypesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingTypes.DataCloudflareZeroTrustCasbFindingTypesResult">DataCloudflareZeroTrustCasbFindingTypesResult</a>

---




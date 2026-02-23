# `dataCloudflareZeroTrustAccessInfrastructureTargets` Submodule <a name="`dataCloudflareZeroTrustAccessInfrastructureTargets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessInfrastructureTargets <a name="DataCloudflareZeroTrustAccessInfrastructureTargets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets cloudflare_zero_trust_access_infrastructure_targets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.NewDataCloudflareZeroTrustAccessInfrastructureTargets(scope Construct, id *string, config DataCloudflareZeroTrustAccessInfrastructureTargetsConfig) DataCloudflareZeroTrustAccessInfrastructureTargets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig">DataCloudflareZeroTrustAccessInfrastructureTargetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig">DataCloudflareZeroTrustAccessInfrastructureTargetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetHostnameContains">ResetHostnameContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpLike">ResetIpLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpV4">ResetIpV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv4End">ResetIpv4End</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv4Start">ResetIpv4Start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpV6">ResetIpV6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv6End">ResetIpv6End</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv6Start">ResetIpv6Start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetModifiedAfter">ResetModifiedAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetModifiedBefore">ResetModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetTargetIds">ResetTargetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetCreatedAfter"></a>

```go
func ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetCreatedBefore"></a>

```go
func ResetCreatedBefore()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetHostnameContains` <a name="ResetHostnameContains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetHostnameContains"></a>

```go
func ResetHostnameContains()
```

##### `ResetIpLike` <a name="ResetIpLike" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpLike"></a>

```go
func ResetIpLike()
```

##### `ResetIps` <a name="ResetIps" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIps"></a>

```go
func ResetIps()
```

##### `ResetIpV4` <a name="ResetIpV4" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpV4"></a>

```go
func ResetIpV4()
```

##### `ResetIpv4End` <a name="ResetIpv4End" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv4End"></a>

```go
func ResetIpv4End()
```

##### `ResetIpv4Start` <a name="ResetIpv4Start" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv4Start"></a>

```go
func ResetIpv4Start()
```

##### `ResetIpV6` <a name="ResetIpV6" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpV6"></a>

```go
func ResetIpV6()
```

##### `ResetIpv6End` <a name="ResetIpv6End" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv6End"></a>

```go
func ResetIpv6End()
```

##### `ResetIpv6Start` <a name="ResetIpv6Start" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetIpv6Start"></a>

```go
func ResetIpv6Start()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetModifiedAfter` <a name="ResetModifiedAfter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetModifiedAfter"></a>

```go
func ResetModifiedAfter()
```

##### `ResetModifiedBefore` <a name="ResetModifiedBefore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetModifiedBefore"></a>

```go
func ResetModifiedBefore()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetTargetIds` <a name="ResetTargetIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetTargetIds"></a>

```go
func ResetTargetIds()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessInfrastructureTargets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessInfrastructureTargets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustAccessInfrastructureTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList">DataCloudflareZeroTrustAccessInfrastructureTargetsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdAfterInput">CreatedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostnameContainsInput">HostnameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipLikeInput">IpLikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4EndInput">Ipv4EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV4Input">IpV4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4StartInput">Ipv4StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6EndInput">Ipv6EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV6Input">IpV6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6StartInput">Ipv6StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedAfterInput">ModifiedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedBeforeInput">ModifiedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.targetIdsInput">TargetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostnameContains">HostnameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipLike">IpLike</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV4">IpV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4End">Ipv4End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4Start">Ipv4Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV6">IpV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6End">Ipv6End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6Start">Ipv6Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedAfter">ModifiedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedBefore">ModifiedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.result"></a>

```go
func Result() DataCloudflareZeroTrustAccessInfrastructureTargetsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList">DataCloudflareZeroTrustAccessInfrastructureTargetsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdAfterInput"></a>

```go
func CreatedAfterInput() *string
```

- *Type:* *string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdBeforeInput"></a>

```go
func CreatedBeforeInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `HostnameContainsInput`<sup>Optional</sup> <a name="HostnameContainsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostnameContainsInput"></a>

```go
func HostnameContainsInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpLikeInput`<sup>Optional</sup> <a name="IpLikeInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipLikeInput"></a>

```go
func IpLikeInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4EndInput`<sup>Optional</sup> <a name="Ipv4EndInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4EndInput"></a>

```go
func Ipv4EndInput() *string
```

- *Type:* *string

---

##### `IpV4Input`<sup>Optional</sup> <a name="IpV4Input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV4Input"></a>

```go
func IpV4Input() *string
```

- *Type:* *string

---

##### `Ipv4StartInput`<sup>Optional</sup> <a name="Ipv4StartInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4StartInput"></a>

```go
func Ipv4StartInput() *string
```

- *Type:* *string

---

##### `Ipv6EndInput`<sup>Optional</sup> <a name="Ipv6EndInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6EndInput"></a>

```go
func Ipv6EndInput() *string
```

- *Type:* *string

---

##### `IpV6Input`<sup>Optional</sup> <a name="IpV6Input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV6Input"></a>

```go
func IpV6Input() *string
```

- *Type:* *string

---

##### `Ipv6StartInput`<sup>Optional</sup> <a name="Ipv6StartInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6StartInput"></a>

```go
func Ipv6StartInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `ModifiedAfterInput`<sup>Optional</sup> <a name="ModifiedAfterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedAfterInput"></a>

```go
func ModifiedAfterInput() *string
```

- *Type:* *string

---

##### `ModifiedBeforeInput`<sup>Optional</sup> <a name="ModifiedBeforeInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedBeforeInput"></a>

```go
func ModifiedBeforeInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.targetIdsInput"></a>

```go
func TargetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdAfter"></a>

```go
func CreatedAfter() *string
```

- *Type:* *string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.createdBefore"></a>

```go
func CreatedBefore() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `HostnameContains`<sup>Required</sup> <a name="HostnameContains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.hostnameContains"></a>

```go
func HostnameContains() *string
```

- *Type:* *string

---

##### `IpLike`<sup>Required</sup> <a name="IpLike" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipLike"></a>

```go
func IpLike() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `IpV4`<sup>Required</sup> <a name="IpV4" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV4"></a>

```go
func IpV4() *string
```

- *Type:* *string

---

##### `Ipv4End`<sup>Required</sup> <a name="Ipv4End" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4End"></a>

```go
func Ipv4End() *string
```

- *Type:* *string

---

##### `Ipv4Start`<sup>Required</sup> <a name="Ipv4Start" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv4Start"></a>

```go
func Ipv4Start() *string
```

- *Type:* *string

---

##### `IpV6`<sup>Required</sup> <a name="IpV6" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipV6"></a>

```go
func IpV6() *string
```

- *Type:* *string

---

##### `Ipv6End`<sup>Required</sup> <a name="Ipv6End" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6End"></a>

```go
func Ipv6End() *string
```

- *Type:* *string

---

##### `Ipv6Start`<sup>Required</sup> <a name="Ipv6Start" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.ipv6Start"></a>

```go
func Ipv6Start() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `ModifiedAfter`<sup>Required</sup> <a name="ModifiedAfter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedAfter"></a>

```go
func ModifiedAfter() *string
```

- *Type:* *string

---

##### `ModifiedBefore`<sup>Required</sup> <a name="ModifiedBefore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.modifiedBefore"></a>

```go
func ModifiedBefore() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessInfrastructureTargetsConfig <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

&datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CreatedAfter: *string,
	CreatedBefore: *string,
	Direction: *string,
	Hostname: *string,
	HostnameContains: *string,
	IpLike: *string,
	Ips: *[]*string,
	IpV4: *string,
	Ipv4End: *string,
	Ipv4Start: *string,
	IpV6: *string,
	Ipv6End: *string,
	Ipv6Start: *string,
	MaxItems: *f64,
	ModifiedAfter: *string,
	ModifiedBefore: *string,
	Order: *string,
	TargetIds: *[]*string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | Date and time at which the target was created after (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | Date and time at which the target was created before (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.direction">Direction</a></code> | <code>*string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of a target. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.hostnameContains">HostnameContains</a></code> | <code>*string</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipLike">IpLike</a></code> | <code>*string</code> | Filters for targets whose IP addresses look like the specified string. Supports `*` as a wildcard character. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ips">Ips</a></code> | <code>*[]*string</code> | Filters for targets that have any of the following IP addresses. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipV4">IpV4</a></code> | <code>*string</code> | IPv4 address of the target. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv4End">Ipv4End</a></code> | <code>*string</code> | Defines an IPv4 filter range's ending value (inclusive). Requires `ipv4_start` to be specified as well. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv4Start">Ipv4Start</a></code> | <code>*string</code> | Defines an IPv4 filter range's starting value (inclusive). Requires `ipv4_end` to be specified as well. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipV6">IpV6</a></code> | <code>*string</code> | IPv6 address of the target. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv6End">Ipv6End</a></code> | <code>*string</code> | Defines an IPv6 filter range's ending value (inclusive). Requires `ipv6_start` to be specified as well. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv6Start">Ipv6Start</a></code> | <code>*string</code> | Defines an IPv6 filter range's starting value (inclusive). Requires `ipv6_end` to be specified as well. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.modifiedAfter">ModifiedAfter</a></code> | <code>*string</code> | Date and time at which the target was modified after (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.modifiedBefore">ModifiedBefore</a></code> | <code>*string</code> | Date and time at which the target was modified before (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.order">Order</a></code> | <code>*string</code> | The field to sort by. Available values: "hostname", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | Filters for targets that have any of the following UUIDs. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Private virtual network identifier of the target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#account_id DataCloudflareZeroTrustAccessInfrastructureTargets#account_id}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.createdAfter"></a>

```go
CreatedAfter *string
```

- *Type:* *string

Date and time at which the target was created after (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#created_after DataCloudflareZeroTrustAccessInfrastructureTargets#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.createdBefore"></a>

```go
CreatedBefore *string
```

- *Type:* *string

Date and time at which the target was created before (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#created_before DataCloudflareZeroTrustAccessInfrastructureTargets#created_before}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#direction DataCloudflareZeroTrustAccessInfrastructureTargets#direction}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#hostname DataCloudflareZeroTrustAccessInfrastructureTargets#hostname}

---

##### `HostnameContains`<sup>Optional</sup> <a name="HostnameContains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.hostnameContains"></a>

```go
HostnameContains *string
```

- *Type:* *string

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#hostname_contains DataCloudflareZeroTrustAccessInfrastructureTargets#hostname_contains}

---

##### `IpLike`<sup>Optional</sup> <a name="IpLike" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipLike"></a>

```go
IpLike *string
```

- *Type:* *string

Filters for targets whose IP addresses look like the specified string. Supports `*` as a wildcard character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_like DataCloudflareZeroTrustAccessInfrastructureTargets#ip_like}

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Filters for targets that have any of the following IP addresses.

Specify
`ips` multiple times in query parameter to build list of candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ips DataCloudflareZeroTrustAccessInfrastructureTargets#ips}

---

##### `IpV4`<sup>Optional</sup> <a name="IpV4" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipV4"></a>

```go
IpV4 *string
```

- *Type:* *string

IPv4 address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_v4 DataCloudflareZeroTrustAccessInfrastructureTargets#ip_v4}

---

##### `Ipv4End`<sup>Optional</sup> <a name="Ipv4End" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv4End"></a>

```go
Ipv4End *string
```

- *Type:* *string

Defines an IPv4 filter range's ending value (inclusive). Requires `ipv4_start` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv4_end DataCloudflareZeroTrustAccessInfrastructureTargets#ipv4_end}

---

##### `Ipv4Start`<sup>Optional</sup> <a name="Ipv4Start" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv4Start"></a>

```go
Ipv4Start *string
```

- *Type:* *string

Defines an IPv4 filter range's starting value (inclusive). Requires `ipv4_end` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv4_start DataCloudflareZeroTrustAccessInfrastructureTargets#ipv4_start}

---

##### `IpV6`<sup>Optional</sup> <a name="IpV6" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipV6"></a>

```go
IpV6 *string
```

- *Type:* *string

IPv6 address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ip_v6 DataCloudflareZeroTrustAccessInfrastructureTargets#ip_v6}

---

##### `Ipv6End`<sup>Optional</sup> <a name="Ipv6End" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv6End"></a>

```go
Ipv6End *string
```

- *Type:* *string

Defines an IPv6 filter range's ending value (inclusive). Requires `ipv6_start` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv6_end DataCloudflareZeroTrustAccessInfrastructureTargets#ipv6_end}

---

##### `Ipv6Start`<sup>Optional</sup> <a name="Ipv6Start" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.ipv6Start"></a>

```go
Ipv6Start *string
```

- *Type:* *string

Defines an IPv6 filter range's starting value (inclusive). Requires `ipv6_end` to be specified as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#ipv6_start DataCloudflareZeroTrustAccessInfrastructureTargets#ipv6_start}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#max_items DataCloudflareZeroTrustAccessInfrastructureTargets#max_items}

---

##### `ModifiedAfter`<sup>Optional</sup> <a name="ModifiedAfter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.modifiedAfter"></a>

```go
ModifiedAfter *string
```

- *Type:* *string

Date and time at which the target was modified after (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#modified_after DataCloudflareZeroTrustAccessInfrastructureTargets#modified_after}

---

##### `ModifiedBefore`<sup>Optional</sup> <a name="ModifiedBefore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.modifiedBefore"></a>

```go
ModifiedBefore *string
```

- *Type:* *string

Date and time at which the target was modified before (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#modified_before DataCloudflareZeroTrustAccessInfrastructureTargets#modified_before}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

The field to sort by. Available values: "hostname", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#order DataCloudflareZeroTrustAccessInfrastructureTargets#order}

---

##### `TargetIds`<sup>Optional</sup> <a name="TargetIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.targetIds"></a>

```go
TargetIds *[]*string
```

- *Type:* *[]*string

Filters for targets that have any of the following UUIDs.

Specify
`target_ids` multiple times in query parameter to build list of
candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#target_ids DataCloudflareZeroTrustAccessInfrastructureTargets#target_ids}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Private virtual network identifier of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_infrastructure_targets#virtual_network_id DataCloudflareZeroTrustAccessInfrastructureTargets#virtual_network_id}

---

### DataCloudflareZeroTrustAccessInfrastructureTargetsResult <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

&datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResult {

}
```


### DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

&datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp {

}
```


### DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

&datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4 {

}
```


### DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

&datacloudflarezerotrustaccessinfrastructuretargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6 {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.NewDataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4</a>

---


### DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.NewDataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6</a>

---


### DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.NewDataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.ipv4"></a>

```go
func Ipv4() DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.ipv6"></a>

```go
func Ipv6() DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpIpv6OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIp</a>

---


### DataCloudflareZeroTrustAccessInfrastructureTargetsResultList <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.NewDataCloudflareZeroTrustAccessInfrastructureTargetsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustAccessInfrastructureTargetsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference <a name="DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezerotrustaccessinfrastructuretargets"

datacloudflarezerotrustaccessinfrastructuretargets.NewDataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.ip">Ip</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResult">DataCloudflareZeroTrustAccessInfrastructureTargetsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.ip"></a>

```go
func Ip() DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference">DataCloudflareZeroTrustAccessInfrastructureTargetsResultIpOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustAccessInfrastructureTargetsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessInfrastructureTargets.DataCloudflareZeroTrustAccessInfrastructureTargetsResult">DataCloudflareZeroTrustAccessInfrastructureTargetsResult</a>

---




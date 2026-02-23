# `magicWanIpsecTunnel` Submodule <a name="`magicWanIpsecTunnel` Submodule" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanIpsecTunnel <a name="MagicWanIpsecTunnel" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnel(scope Construct, id *string, config MagicWanIpsecTunnelConfig) MagicWanIpsecTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp">PutBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities">PutCustomRemoteIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAutomaticReturnRouting">ResetAutomaticReturnRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetBgp">ResetBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint">ResetCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomRemoteIdentities">ResetCustomRemoteIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetInterfaceAddress6">ResetInterfaceAddress6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk">ResetPsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection">ResetReplayProtection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgp` <a name="PutBgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp"></a>

```go
func PutBgp(value MagicWanIpsecTunnelBgp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

---

##### `PutCustomRemoteIdentities` <a name="PutCustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities"></a>

```go
func PutCustomRemoteIdentities(value MagicWanIpsecTunnelCustomRemoteIdentities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck"></a>

```go
func PutHealthCheck(value MagicWanIpsecTunnelHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

---

##### `ResetAutomaticReturnRouting` <a name="ResetAutomaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAutomaticReturnRouting"></a>

```go
func ResetAutomaticReturnRouting()
```

##### `ResetBgp` <a name="ResetBgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetBgp"></a>

```go
func ResetBgp()
```

##### `ResetCustomerEndpoint` <a name="ResetCustomerEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint"></a>

```go
func ResetCustomerEndpoint()
```

##### `ResetCustomRemoteIdentities` <a name="ResetCustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomRemoteIdentities"></a>

```go
func ResetCustomRemoteIdentities()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetInterfaceAddress6` <a name="ResetInterfaceAddress6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetInterfaceAddress6"></a>

```go
func ResetInterfaceAddress6()
```

##### `ResetPsk` <a name="ResetPsk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk"></a>

```go
func ResetPsk()
```

##### `ResetReplayProtection` <a name="ResetReplayProtection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection"></a>

```go
func ResetReplayProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MagicWanIpsecTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MagicWanIpsecTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MagicWanIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher">AllowNullCipher</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgp">Bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference">MagicWanIpsecTunnelBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpStatus">BgpStatus</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference">MagicWanIpsecTunnelBgpStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentities">CustomRemoteIdentities</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference">MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskMetadata">PskMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRoutingInput">AutomaticReturnRoutingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpInput">BgpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput">CloudflareEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput">CustomerEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentitiesInput">CustomRemoteIdentitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput">HealthCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6Input">InterfaceAddress6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput">InterfaceAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput">PskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput">ReplayProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRouting">AutomaticReturnRouting</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6">InterfaceAddress6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk">Psk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection">ReplayProtection</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowNullCipher`<sup>Required</sup> <a name="AllowNullCipher" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher"></a>

```go
func AllowNullCipher() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Bgp`<sup>Required</sup> <a name="Bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgp"></a>

```go
func Bgp() MagicWanIpsecTunnelBgpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference">MagicWanIpsecTunnelBgpOutputReference</a>

---

##### `BgpStatus`<sup>Required</sup> <a name="BgpStatus" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpStatus"></a>

```go
func BgpStatus() MagicWanIpsecTunnelBgpStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference">MagicWanIpsecTunnelBgpStatusOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomRemoteIdentities`<sup>Required</sup> <a name="CustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentities"></a>

```go
func CustomRemoteIdentities() MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference">MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck"></a>

```go
func HealthCheck() MagicWanIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `PskMetadata`<sup>Required</sup> <a name="PskMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskMetadata"></a>

```go
func PskMetadata() MagicWanIpsecTunnelPskMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelPskMetadataOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AutomaticReturnRoutingInput`<sup>Optional</sup> <a name="AutomaticReturnRoutingInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRoutingInput"></a>

```go
func AutomaticReturnRoutingInput() interface{}
```

- *Type:* interface{}

---

##### `BgpInput`<sup>Optional</sup> <a name="BgpInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpInput"></a>

```go
func BgpInput() interface{}
```

- *Type:* interface{}

---

##### `CloudflareEndpointInput`<sup>Optional</sup> <a name="CloudflareEndpointInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput"></a>

```go
func CloudflareEndpointInput() *string
```

- *Type:* *string

---

##### `CustomerEndpointInput`<sup>Optional</sup> <a name="CustomerEndpointInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput"></a>

```go
func CustomerEndpointInput() *string
```

- *Type:* *string

---

##### `CustomRemoteIdentitiesInput`<sup>Optional</sup> <a name="CustomRemoteIdentitiesInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentitiesInput"></a>

```go
func CustomRemoteIdentitiesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput"></a>

```go
func HealthCheckInput() interface{}
```

- *Type:* interface{}

---

##### `InterfaceAddress6Input`<sup>Optional</sup> <a name="InterfaceAddress6Input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6Input"></a>

```go
func InterfaceAddress6Input() *string
```

- *Type:* *string

---

##### `InterfaceAddressInput`<sup>Optional</sup> <a name="InterfaceAddressInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput"></a>

```go
func InterfaceAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PskInput`<sup>Optional</sup> <a name="PskInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput"></a>

```go
func PskInput() *string
```

- *Type:* *string

---

##### `ReplayProtectionInput`<sup>Optional</sup> <a name="ReplayProtectionInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput"></a>

```go
func ReplayProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AutomaticReturnRouting`<sup>Required</sup> <a name="AutomaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRouting"></a>

```go
func AutomaticReturnRouting() interface{}
```

- *Type:* interface{}

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint"></a>

```go
func CloudflareEndpoint() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint"></a>

```go
func CustomerEndpoint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress"></a>

```go
func InterfaceAddress() *string
```

- *Type:* *string

---

##### `InterfaceAddress6`<sup>Required</sup> <a name="InterfaceAddress6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6"></a>

```go
func InterfaceAddress6() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk"></a>

```go
func Psk() *string
```

- *Type:* *string

---

##### `ReplayProtection`<sup>Required</sup> <a name="ReplayProtection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection"></a>

```go
func ReplayProtection() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanIpsecTunnelBgp <a name="MagicWanIpsecTunnelBgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelBgp {
	CustomerAsn: *f64,
	ExtraPrefixes: *[]*string,
	Md5Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.customerAsn">CustomerAsn</a></code> | <code>*f64</code> | ASN used on the customer end of the BGP session. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.extraPrefixes">ExtraPrefixes</a></code> | <code>*[]*string</code> | Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.md5Key">Md5Key</a></code> | <code>*string</code> | MD5 key to use for session authentication. |

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.customerAsn"></a>

```go
CustomerAsn *f64
```

- *Type:* *f64

ASN used on the customer end of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_asn MagicWanIpsecTunnel#customer_asn}

---

##### `ExtraPrefixes`<sup>Optional</sup> <a name="ExtraPrefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.extraPrefixes"></a>

```go
ExtraPrefixes *[]*string
```

- *Type:* *[]*string

Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#extra_prefixes MagicWanIpsecTunnel#extra_prefixes}

---

##### `Md5Key`<sup>Optional</sup> <a name="Md5Key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.md5Key"></a>

```go
Md5Key *string
```

- *Type:* *string

MD5 key to use for session authentication.

Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the
key is not treated as a secret value. This is *only* supported for preventing
misconfiguration, not for defending against malicious attacks.

The MD5 key, if set, must be of non-zero length and consist only of the following types of
character:

* ASCII alphanumerics: `[a-zA-Z0-9]`
* Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= |`

In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),
quotation mark (`"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed
(0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of
these disallowed characters will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#md5_key MagicWanIpsecTunnel#md5_key}

---

### MagicWanIpsecTunnelBgpStatus <a name="MagicWanIpsecTunnelBgpStatus" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelBgpStatus {

}
```


### MagicWanIpsecTunnelConfig <a name="MagicWanIpsecTunnelConfig" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CloudflareEndpoint: *string,
	InterfaceAddress: *string,
	Name: *string,
	AutomaticReturnRouting: interface{},
	Bgp: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp,
	CustomerEndpoint: *string,
	CustomRemoteIdentities: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities,
	Description: *string,
	HealthCheck: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck,
	InterfaceAddress6: *string,
	Psk: *string,
	ReplayProtection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | The IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name">Name</a></code> | <code>*string</code> | The name of the IPsec tunnel. The name cannot share a name with other tunnels. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.automaticReturnRouting">AutomaticReturnRouting</a></code> | <code>interface{}</code> | True if automatic stateful return routing should be enabled for a tunnel, false otherwise. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.bgp">Bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | The IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customRemoteIdentities">CustomRemoteIdentities</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description">Description</a></code> | <code>*string</code> | An optional description forthe IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress6">InterfaceAddress6</a></code> | <code>*string</code> | A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk">Psk</a></code> | <code>*string</code> | A randomly generated or provided string for use in the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection">ReplayProtection</a></code> | <code>interface{}</code> | If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint"></a>

```go
CloudflareEndpoint *string
```

- *Type:* *string

The IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress"></a>

```go
InterfaceAddress *string
```

- *Type:* *string

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the IPsec tunnel. The name cannot share a name with other tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `AutomaticReturnRouting`<sup>Optional</sup> <a name="AutomaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.automaticReturnRouting"></a>

```go
AutomaticReturnRouting interface{}
```

- *Type:* interface{}

True if automatic stateful return routing should be enabled for a tunnel, false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#automatic_return_routing MagicWanIpsecTunnel#automatic_return_routing}

---

##### `Bgp`<sup>Optional</sup> <a name="Bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.bgp"></a>

```go
Bgp MagicWanIpsecTunnelBgp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}.

---

##### `CustomerEndpoint`<sup>Optional</sup> <a name="CustomerEndpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint"></a>

```go
CustomerEndpoint *string
```

- *Type:* *string

The IP address assigned to the customer side of the IPsec tunnel.

Not required, but must be set for proactive traceroutes to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `CustomRemoteIdentities`<sup>Optional</sup> <a name="CustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customRemoteIdentities"></a>

```go
CustomRemoteIdentities MagicWanIpsecTunnelCustomRemoteIdentities
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description forthe IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck"></a>

```go
HealthCheck MagicWanIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}.

---

##### `InterfaceAddress6`<sup>Optional</sup> <a name="InterfaceAddress6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress6"></a>

```go
InterfaceAddress6 *string
```

- *Type:* *string

A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6.

Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address6 MagicWanIpsecTunnel#interface_address6}

---

##### `Psk`<sup>Optional</sup> <a name="Psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk"></a>

```go
Psk *string
```

- *Type:* *string

A randomly generated or provided string for use in the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `ReplayProtection`<sup>Optional</sup> <a name="ReplayProtection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection"></a>

```go
ReplayProtection interface{}
```

- *Type:* interface{}

If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

### MagicWanIpsecTunnelCustomRemoteIdentities <a name="MagicWanIpsecTunnelCustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelCustomRemoteIdentities {
	FqdnId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.property.fqdnId">FqdnId</a></code> | <code>*string</code> | A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel. |

---

##### `FqdnId`<sup>Optional</sup> <a name="FqdnId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.property.fqdnId"></a>

```go
FqdnId *string
```

- *Type:* *string

A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel.

The
generated IKE IDs can still be used even if this custom value is specified.

Must be of the form `<custom label>.<account ID>.custom.ipsec.cloudflare.com`.

This custom ID does not need to be unique. Two IPsec tunnels may have the same custom
fqdn_id. However, if another IPsec tunnel has the same value then the two tunnels
cannot have the same cloudflare_endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#fqdn_id MagicWanIpsecTunnel#fqdn_id}

---

### MagicWanIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelHealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelHealthCheck {
	Direction: *string,
	Enabled: interface{},
	Rate: *string,
	Target: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction">Direction</a></code> | <code>*string</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled">Enabled</a></code> | <code>interface{}</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate">Rate</a></code> | <code>*string</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target">Target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type">Type</a></code> | <code>*string</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}

---

##### `Rate`<sup>Optional</sup> <a name="Rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate"></a>

```go
Rate *string
```

- *Type:* *string

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target"></a>

```go
Target MagicWanIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}

---

### MagicWanIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelHealthCheckTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelHealthCheckTarget {
	Saved: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved">Saved</a></code> | <code>*string</code> | The saved health check target. |

---

##### `Saved`<sup>Optional</sup> <a name="Saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved"></a>

```go
Saved *string
```

- *Type:* *string

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}

---

### MagicWanIpsecTunnelPskMetadata <a name="MagicWanIpsecTunnelPskMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelPskMetadata {

}
```


## Classes <a name="Classes" id="Classes"></a>

### MagicWanIpsecTunnelBgpOutputReference <a name="MagicWanIpsecTunnelBgpOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelBgpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelBgpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetExtraPrefixes">ResetExtraPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetMd5Key">ResetMd5Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtraPrefixes` <a name="ResetExtraPrefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetExtraPrefixes"></a>

```go
func ResetExtraPrefixes()
```

##### `ResetMd5Key` <a name="ResetMd5Key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetMd5Key"></a>

```go
func ResetMd5Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsnInput">CustomerAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixesInput">ExtraPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5KeyInput">Md5KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixes">ExtraPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5Key">Md5Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerAsnInput`<sup>Optional</sup> <a name="CustomerAsnInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsnInput"></a>

```go
func CustomerAsnInput() *f64
```

- *Type:* *f64

---

##### `ExtraPrefixesInput`<sup>Optional</sup> <a name="ExtraPrefixesInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixesInput"></a>

```go
func ExtraPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Md5KeyInput`<sup>Optional</sup> <a name="Md5KeyInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5KeyInput"></a>

```go
func Md5KeyInput() *string
```

- *Type:* *string

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsn"></a>

```go
func CustomerAsn() *f64
```

- *Type:* *f64

---

##### `ExtraPrefixes`<sup>Required</sup> <a name="ExtraPrefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixes"></a>

```go
func ExtraPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Md5Key`<sup>Required</sup> <a name="Md5Key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5Key"></a>

```go
func Md5Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicWanIpsecTunnelBgpStatusOutputReference <a name="MagicWanIpsecTunnelBgpStatusOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelBgpStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelBgpStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.bgpState">BgpState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerIp">CfSpeakerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerPort">CfSpeakerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerIp">CustomerSpeakerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerPort">CustomerSpeakerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.tcpEstablished">TcpEstablished</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus">MagicWanIpsecTunnelBgpStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpState`<sup>Required</sup> <a name="BgpState" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.bgpState"></a>

```go
func BgpState() *string
```

- *Type:* *string

---

##### `CfSpeakerIp`<sup>Required</sup> <a name="CfSpeakerIp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerIp"></a>

```go
func CfSpeakerIp() *string
```

- *Type:* *string

---

##### `CfSpeakerPort`<sup>Required</sup> <a name="CfSpeakerPort" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerPort"></a>

```go
func CfSpeakerPort() *f64
```

- *Type:* *f64

---

##### `CustomerSpeakerIp`<sup>Required</sup> <a name="CustomerSpeakerIp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerIp"></a>

```go
func CustomerSpeakerIp() *string
```

- *Type:* *string

---

##### `CustomerSpeakerPort`<sup>Required</sup> <a name="CustomerSpeakerPort" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerPort"></a>

```go
func CustomerSpeakerPort() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TcpEstablished`<sup>Required</sup> <a name="TcpEstablished" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.tcpEstablished"></a>

```go
func TcpEstablished() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelBgpStatus
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus">MagicWanIpsecTunnelBgpStatus</a>

---


### MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference <a name="MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resetFqdnId">ResetFqdnId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFqdnId` <a name="ResetFqdnId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resetFqdnId"></a>

```go
func ResetFqdnId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnIdInput">FqdnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnId">FqdnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FqdnIdInput`<sup>Optional</sup> <a name="FqdnIdInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnIdInput"></a>

```go
func FqdnIdInput() *string
```

- *Type:* *string

---

##### `FqdnId`<sup>Required</sup> <a name="FqdnId" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnId"></a>

```go
func FqdnId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicWanIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelHealthCheckOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate">ResetRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget"></a>

```go
func PutTarget(value MagicWanIpsecTunnelHealthCheckTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRate` <a name="ResetRate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate"></a>

```go
func ResetRate()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput">RateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate">Rate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target"></a>

```go
func Target() MagicWanIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RateInput`<sup>Optional</sup> <a name="RateInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput"></a>

```go
func RateInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```go
func Rate() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicWanIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelHealthCheckTargetOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelHealthCheckTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelHealthCheckTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved">ResetSaved</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSaved` <a name="ResetSaved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```go
func ResetSaved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective">Effective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput">SavedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved">Saved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```go
func Effective() *string
```

- *Type:* *string

---

##### `SavedInput`<sup>Optional</sup> <a name="SavedInput" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```go
func SavedInput() *string
```

- *Type:* *string

---

##### `Saved`<sup>Required</sup> <a name="Saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```go
func Saved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicWanIpsecTunnelPskMetadataOutputReference <a name="MagicWanIpsecTunnelPskMetadataOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelPskMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelPskMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">LastGeneratedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata">MagicWanIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastGeneratedOn`<sup>Required</sup> <a name="LastGeneratedOn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```go
func LastGeneratedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelPskMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata">MagicWanIpsecTunnelPskMetadata</a>

---




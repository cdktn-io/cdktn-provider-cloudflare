# `zeroTrustDlpPredefinedProfile` Submodule <a name="`zeroTrustDlpPredefinedProfile` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpPredefinedProfile <a name="ZeroTrustDlpPredefinedProfile" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

zerotrustdlppredefinedprofile.NewZeroTrustDlpPredefinedProfile(scope Construct, id *string, config ZeroTrustDlpPredefinedProfileConfig) ZeroTrustDlpPredefinedProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig">ZeroTrustDlpPredefinedProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig">ZeroTrustDlpPredefinedProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled">ResetAiContextEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount">ResetAllowedMatchCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold">ResetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEnabledEntries">ResetEnabledEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries">ResetEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled">ResetOcrEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntries` <a name="PutEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries"></a>

```go
func PutEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAiContextEnabled` <a name="ResetAiContextEnabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled"></a>

```go
func ResetAiContextEnabled()
```

##### `ResetAllowedMatchCount` <a name="ResetAllowedMatchCount" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount"></a>

```go
func ResetAllowedMatchCount()
```

##### `ResetConfidenceThreshold` <a name="ResetConfidenceThreshold" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold"></a>

```go
func ResetConfidenceThreshold()
```

##### `ResetEnabledEntries` <a name="ResetEnabledEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEnabledEntries"></a>

```go
func ResetEnabledEntries()
```

##### `ResetEntries` <a name="ResetEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries"></a>

```go
func ResetEntries()
```

##### `ResetOcrEnabled` <a name="ResetOcrEnabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled"></a>

```go
func ResetOcrEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

zerotrustdlppredefinedprofile.ZeroTrustDlpPredefinedProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

zerotrustdlppredefinedprofile.ZeroTrustDlpPredefinedProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

zerotrustdlppredefinedprofile.ZeroTrustDlpPredefinedProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

zerotrustdlppredefinedprofile.ZeroTrustDlpPredefinedProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDlpPredefinedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess">OpenAccess</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput">AiContextEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput">AllowedMatchCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput">ConfidenceThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntriesInput">EnabledEntriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput">EntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput">OcrEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled">AiContextEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount">AllowedMatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntries">EnabledEntries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled">OcrEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries"></a>

```go
func Entries() ZeroTrustDlpPredefinedProfileEntriesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenAccess`<sup>Required</sup> <a name="OpenAccess" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess"></a>

```go
func OpenAccess() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AiContextEnabledInput`<sup>Optional</sup> <a name="AiContextEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput"></a>

```go
func AiContextEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedMatchCountInput`<sup>Optional</sup> <a name="AllowedMatchCountInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput"></a>

```go
func AllowedMatchCountInput() *f64
```

- *Type:* *f64

---

##### `ConfidenceThresholdInput`<sup>Optional</sup> <a name="ConfidenceThresholdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput"></a>

```go
func ConfidenceThresholdInput() *string
```

- *Type:* *string

---

##### `EnabledEntriesInput`<sup>Optional</sup> <a name="EnabledEntriesInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntriesInput"></a>

```go
func EnabledEntriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput"></a>

```go
func EntriesInput() interface{}
```

- *Type:* interface{}

---

##### `OcrEnabledInput`<sup>Optional</sup> <a name="OcrEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput"></a>

```go
func OcrEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AiContextEnabled`<sup>Required</sup> <a name="AiContextEnabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled"></a>

```go
func AiContextEnabled() interface{}
```

- *Type:* interface{}

---

##### `AllowedMatchCount`<sup>Required</sup> <a name="AllowedMatchCount" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount"></a>

```go
func AllowedMatchCount() *f64
```

- *Type:* *f64

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold"></a>

```go
func ConfidenceThreshold() *string
```

- *Type:* *string

---

##### `EnabledEntries`<sup>Required</sup> <a name="EnabledEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntries"></a>

```go
func EnabledEntries() *[]*string
```

- *Type:* *[]*string

---

##### `OcrEnabled`<sup>Required</sup> <a name="OcrEnabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled"></a>

```go
func OcrEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpPredefinedProfileConfig <a name="ZeroTrustDlpPredefinedProfileConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

&zerotrustdlppredefinedprofile.ZeroTrustDlpPredefinedProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ProfileId: *string,
	AiContextEnabled: interface{},
	AllowedMatchCount: *f64,
	ConfidenceThreshold: *string,
	EnabledEntries: *[]*string,
	Entries: interface{},
	OcrEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId">ProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled">AiContextEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount">AllowedMatchCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.enabledEntries">EnabledEntries</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries">Entries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled">OcrEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}.

---

##### `AiContextEnabled`<sup>Optional</sup> <a name="AiContextEnabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled"></a>

```go
AiContextEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}.

---

##### `AllowedMatchCount`<sup>Optional</sup> <a name="AllowedMatchCount" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount"></a>

```go
AllowedMatchCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}.

---

##### `ConfidenceThreshold`<sup>Optional</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold"></a>

```go
ConfidenceThreshold *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}.

---

##### `EnabledEntries`<sup>Optional</sup> <a name="EnabledEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.enabledEntries"></a>

```go
EnabledEntries *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}.

---

##### `Entries`<sup>Optional</sup> <a name="Entries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries"></a>

```go
Entries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}.

---

##### `OcrEnabled`<sup>Optional</sup> <a name="OcrEnabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled"></a>

```go
OcrEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}.

---

### ZeroTrustDlpPredefinedProfileEntries <a name="ZeroTrustDlpPredefinedProfileEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

&zerotrustdlppredefinedprofile.ZeroTrustDlpPredefinedProfileEntries {
	Enabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpPredefinedProfileEntriesList <a name="ZeroTrustDlpPredefinedProfileEntriesList" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

zerotrustdlppredefinedprofile.NewZeroTrustDlpPredefinedProfileEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDlpPredefinedProfileEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get"></a>

```go
func Get(index *f64) ZeroTrustDlpPredefinedProfileEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDlpPredefinedProfileEntriesOutputReference <a name="ZeroTrustDlpPredefinedProfileEntriesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustdlppredefinedprofile"

zerotrustdlppredefinedprofile.NewZeroTrustDlpPredefinedProfileEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDlpPredefinedProfileEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




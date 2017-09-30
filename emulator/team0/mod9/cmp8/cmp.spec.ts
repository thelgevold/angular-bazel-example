
import { Cmp4098Component } from './cmp';
describe('Cmp4098Component', () => {
  it('should add', () => {
    expect(new Cmp4098Component().add4098(1)).toBe(4099);
  });
});
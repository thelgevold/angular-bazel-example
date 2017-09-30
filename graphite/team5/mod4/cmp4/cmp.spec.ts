
import { Cmp6544Component } from './cmp';
describe('Cmp6544Component', () => {
  it('should add', () => {
    expect(new Cmp6544Component().add6544(1)).toBe(6545);
  });
});
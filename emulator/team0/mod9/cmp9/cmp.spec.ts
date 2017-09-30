
import { Cmp4099Component } from './cmp';
describe('Cmp4099Component', () => {
  it('should add', () => {
    expect(new Cmp4099Component().add4099(1)).toBe(4100);
  });
});
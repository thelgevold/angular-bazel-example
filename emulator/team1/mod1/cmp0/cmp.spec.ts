
import { Cmp4110Component } from './cmp';
describe('Cmp4110Component', () => {
  it('should add', () => {
    expect(new Cmp4110Component().add4110(1)).toBe(4111);
  });
});

import { Cmp4120Component } from './cmp';
describe('Cmp4120Component', () => {
  it('should add', () => {
    expect(new Cmp4120Component().add4120(1)).toBe(4121);
  });
});
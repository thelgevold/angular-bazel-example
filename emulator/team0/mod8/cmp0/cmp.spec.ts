
import { Cmp4080Component } from './cmp';
describe('Cmp4080Component', () => {
  it('should add', () => {
    expect(new Cmp4080Component().add4080(1)).toBe(4081);
  });
});
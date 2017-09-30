
import { Cmp6080Component } from './cmp';
describe('Cmp6080Component', () => {
  it('should add', () => {
    expect(new Cmp6080Component().add6080(1)).toBe(6081);
  });
});
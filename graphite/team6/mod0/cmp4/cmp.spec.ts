
import { Cmp6604Component } from './cmp';
describe('Cmp6604Component', () => {
  it('should add', () => {
    expect(new Cmp6604Component().add6604(1)).toBe(6605);
  });
});
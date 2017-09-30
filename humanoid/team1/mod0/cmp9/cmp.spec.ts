
import { Cmp7109Component } from './cmp';
describe('Cmp7109Component', () => {
  it('should add', () => {
    expect(new Cmp7109Component().add7109(1)).toBe(7110);
  });
});
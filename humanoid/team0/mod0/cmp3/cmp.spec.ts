
import { Cmp7003Component } from './cmp';
describe('Cmp7003Component', () => {
  it('should add', () => {
    expect(new Cmp7003Component().add7003(1)).toBe(7004);
  });
});
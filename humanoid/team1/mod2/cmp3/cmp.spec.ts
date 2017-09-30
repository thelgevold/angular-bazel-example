
import { Cmp7123Component } from './cmp';
describe('Cmp7123Component', () => {
  it('should add', () => {
    expect(new Cmp7123Component().add7123(1)).toBe(7124);
  });
});
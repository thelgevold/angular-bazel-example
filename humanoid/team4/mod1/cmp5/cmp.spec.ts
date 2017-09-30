
import { Cmp7415Component } from './cmp';
describe('Cmp7415Component', () => {
  it('should add', () => {
    expect(new Cmp7415Component().add7415(1)).toBe(7416);
  });
});
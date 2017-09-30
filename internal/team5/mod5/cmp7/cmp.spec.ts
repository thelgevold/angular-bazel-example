
import { Cmp8557Component } from './cmp';
describe('Cmp8557Component', () => {
  it('should add', () => {
    expect(new Cmp8557Component().add8557(1)).toBe(8558);
  });
});
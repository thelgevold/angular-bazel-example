
import { Cmp2370Component } from './cmp';
describe('Cmp2370Component', () => {
  it('should add', () => {
    expect(new Cmp2370Component().add2370(1)).toBe(2371);
  });
});
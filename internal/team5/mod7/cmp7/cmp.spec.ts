
import { Cmp8577Component } from './cmp';
describe('Cmp8577Component', () => {
  it('should add', () => {
    expect(new Cmp8577Component().add8577(1)).toBe(8578);
  });
});
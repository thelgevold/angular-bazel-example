
import { Cmp8024Component } from './cmp';
describe('Cmp8024Component', () => {
  it('should add', () => {
    expect(new Cmp8024Component().add8024(1)).toBe(8025);
  });
});
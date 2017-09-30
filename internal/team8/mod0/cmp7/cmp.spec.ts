
import { Cmp8807Component } from './cmp';
describe('Cmp8807Component', () => {
  it('should add', () => {
    expect(new Cmp8807Component().add8807(1)).toBe(8808);
  });
});
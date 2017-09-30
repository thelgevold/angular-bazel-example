
import { Cmp9251Component } from './cmp';
describe('Cmp9251Component', () => {
  it('should add', () => {
    expect(new Cmp9251Component().add9251(1)).toBe(9252);
  });
});
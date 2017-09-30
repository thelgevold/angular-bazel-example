
import { Cmp5251Component } from './cmp';
describe('Cmp5251Component', () => {
  it('should add', () => {
    expect(new Cmp5251Component().add5251(1)).toBe(5252);
  });
});
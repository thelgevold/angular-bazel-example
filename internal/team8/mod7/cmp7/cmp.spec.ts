
import { Cmp8877Component } from './cmp';
describe('Cmp8877Component', () => {
  it('should add', () => {
    expect(new Cmp8877Component().add8877(1)).toBe(8878);
  });
});
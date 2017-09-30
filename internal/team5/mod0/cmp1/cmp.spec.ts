
import { Cmp8501Component } from './cmp';
describe('Cmp8501Component', () => {
  it('should add', () => {
    expect(new Cmp8501Component().add8501(1)).toBe(8502);
  });
});
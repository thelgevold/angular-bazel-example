
import { Cmp8078Component } from './cmp';
describe('Cmp8078Component', () => {
  it('should add', () => {
    expect(new Cmp8078Component().add8078(1)).toBe(8079);
  });
});
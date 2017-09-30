
import { Cmp8079Component } from './cmp';
describe('Cmp8079Component', () => {
  it('should add', () => {
    expect(new Cmp8079Component().add8079(1)).toBe(8080);
  });
});
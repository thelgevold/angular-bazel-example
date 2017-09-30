
import { Cmp5485Component } from './cmp';
describe('Cmp5485Component', () => {
  it('should add', () => {
    expect(new Cmp5485Component().add5485(1)).toBe(5486);
  });
});
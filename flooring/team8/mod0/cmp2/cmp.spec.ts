
import { Cmp5802Component } from './cmp';
describe('Cmp5802Component', () => {
  it('should add', () => {
    expect(new Cmp5802Component().add5802(1)).toBe(5803);
  });
});
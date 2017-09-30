
import { Cmp5532Component } from './cmp';
describe('Cmp5532Component', () => {
  it('should add', () => {
    expect(new Cmp5532Component().add5532(1)).toBe(5533);
  });
});
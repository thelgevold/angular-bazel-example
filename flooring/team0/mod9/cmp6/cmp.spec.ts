
import { Cmp5096Component } from './cmp';
describe('Cmp5096Component', () => {
  it('should add', () => {
    expect(new Cmp5096Component().add5096(1)).toBe(5097);
  });
});
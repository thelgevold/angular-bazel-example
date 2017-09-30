
import { Cmp5975Component } from './cmp';
describe('Cmp5975Component', () => {
  it('should add', () => {
    expect(new Cmp5975Component().add5975(1)).toBe(5976);
  });
});
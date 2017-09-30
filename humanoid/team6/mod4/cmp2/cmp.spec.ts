
import { Cmp7642Component } from './cmp';
describe('Cmp7642Component', () => {
  it('should add', () => {
    expect(new Cmp7642Component().add7642(1)).toBe(7643);
  });
});
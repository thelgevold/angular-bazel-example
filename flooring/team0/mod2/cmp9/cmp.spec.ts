
import { Cmp5029Component } from './cmp';
describe('Cmp5029Component', () => {
  it('should add', () => {
    expect(new Cmp5029Component().add5029(1)).toBe(5030);
  });
});
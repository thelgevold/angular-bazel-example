
import { Cmp7872Component } from './cmp';
describe('Cmp7872Component', () => {
  it('should add', () => {
    expect(new Cmp7872Component().add7872(1)).toBe(7873);
  });
});